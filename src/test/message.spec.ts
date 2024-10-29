import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("POST a new Message", () => {
  it("Should sent a message to Telegram Bot", async () => {
    await request
      .post("/")
      .send("Welcome to my Bot!")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          data: "Message sent successfully",
          message: "Success",
          status: 200,
        });
      });
  });
});
