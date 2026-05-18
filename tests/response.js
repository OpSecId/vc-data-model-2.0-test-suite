/*
 * Copyright 2024 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: LicenseRef-w3c-3-clause-bsd-license-2008 OR LicenseRef-w3c-test-suite-license-2023
 */

/**
 * Normalize a VC issue HTTP response body to the issued credential object.
 * Implementations may return the VC directly, or wrapped as either
 * `verifiableCredential` (VC-API) or `credential` (legacy/alternate).
 *
 * @param {object} data - Parsed JSON from POST /credentials/issue.
 * @returns {object} The issued verifiable credential.
 */
export function extractIssuedCredential(data) {
  if(data == null || typeof data !== 'object') {
    return data;
  }
  if(data.verifiableCredential !== undefined) {
    return data.verifiableCredential;
  }
  if(data.credential !== undefined) {
    return data.credential;
  }
  return data;
}
