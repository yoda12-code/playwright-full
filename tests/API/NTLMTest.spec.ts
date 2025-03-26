import { test, expect, request } from '@playwright/test';
import * as httpntlm from 'httpntlm';

test('NTLM Authentication with Playwright', async () => {
  const username = 'phibred\\dhw124';
  const password = 'Abdul@12341234';
  const domain = '';  // Typically the domain is empty or your domain name if required
  const url = 'https://tcsapps1-jh.phiqa.com/evengerservice/api/workstreams/activities/count';

  // NTLM Authentication using httpntlm
  const ntlmAuthOptions = {
    username: username,
    password: password,
    domain: domain,  // Set to your domain if applicable
    workstation: '',  // Workstation can often be left empty
    url: url,
    rejectUnauthorized:false
  };
  console.log("the user name is ",username)

  // Get the NTLM response (this handles the handshake and authentication)
  const ntlmResponse = await new Promise<any>((resolve, reject) => {
    httpntlm.get(ntlmAuthOptions, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  // Extract the NTLM token from the authentication response
  const authenticateHeader = ntlmResponse.headers['www-authenticate'];
  
  if (!authenticateHeader) {
    throw new Error('NTLM authentication failed: No WWW-Authenticate header found');
  }

  // The NTLM token will be part of the WWW-Authenticate header (usually in the format: 'NTLM <token>')
  const ntlmToken = authenticateHeader.split(' ')[1];  // Extract the NTLM token from the header
  
  // Now we can use Playwright's API context to send the authenticated request
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,  // Disable SSL certificate validation
  });

  // Make the authenticated GET request to the API
  const response = await apiContext.get(url, {
    headers: {
      'Authorization': `NTLM ${ntlmToken}`,  // Pass the NTLM token in the Authorization header
    },
  });

  // Verify the response status and log the response body
  const body = await response.json()
  expect(response.status()).toBe(200);
  ;
  console.log(body);  // Log the response to see the result

  await apiContext.dispose();  // Clean up the context
});