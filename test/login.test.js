const app = require("../bin/www");
const request = require("supertest");
const { expect } = require("chai");
const debug = require("debug")("webportal-api:test");

debug("dont forget to set google code on test/login.test.js ");
const googleCode = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA5MDVkNmY5Y2Q5YjBmMWY4NTJlOGIyMDdlOGY2NzNhYmNhNGJmNzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzY1NDQ2ODM2MDg2LXQwZ2t1Z2tkMWRoMzUzbW5oZjY5cW1yOWJodTY2bjVuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzY1NDQ2ODM2MDg2LXQwZ2t1Z2tkMWRoMzUzbW5oZjY5cW1yOWJodTY2bjVuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxNjc0MDQzMjE5OTk1Mjg4Mzg3IiwiaGQiOiJncm93dGhvcHMuYXNpYSIsImVtYWlsIjoiamVmZmVyc29uLmN1ZXZhQGdyb3d0aG9wcy5hc2lhIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJJc0xtN0ZTTk9MUHRwcUJtVTlRNWRRIiwibmFtZSI6IkplZmZlcnNvbiBDdWV2YSIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUFCc24tb2JyS2w4L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmUxbG9Pd044YUdzVGxPcHQzMWt4anpEekd4SUEvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkplZmZlcnNvbiIsImZhbWlseV9uYW1lIjoiQ3VldmEiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU1MzU4MTIwNCwiZXhwIjoxNTUzNTg0ODA0LCJqdGkiOiIwOWE5ODU3OGJiY2MyYmU2N2RkYWZmZmRjNzgzOTY4NGY0ODgzZDZmIn0.HoXcz8ltkNHy7C8rafDmNAoUx49lQCXca3RL9BhlJMG5B57soyAReDxAvZkMqIzQYoSIQ5CLKVfgyl6OinkAOMMbjdELgmvzaigk87890f-9I4smquoF7ahQMvaLKiCKRqXV-WNE7n6i4wQMkzYD8NRpGTWmmCp0ebK8W0PYa-HFCdQS-s8LaUNkAv1YavfPtXWxVEkdAJUJvPjIzmyPnm8-z6HquRk6YXnUuLXguk7-224i7w73ZPXFMKiH0EAOLWiKXR6y6VATJgJJQ9sUpGWGY8UPsP7KgmRcihjYqvWzCHEtulWdgprMWA-iWncqOxTpI1LtoRm3nmT0BOjoaA"

var googleUserToken1;

describe("GOOGLE AUTH ROUTE", () => {
  it("returns 200 and returns token", done => {
    request(app)
      .post(`/api/auth/token`)
      .set("password", `admin123456`)
      .send({
        code: googleCode,
        type: "google"
      })
      .expect(res=>{
          expect(res.body.token).to.be.not.an('undefined');
      })
      .expect(200, done);
  });
});