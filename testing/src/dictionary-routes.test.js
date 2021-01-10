const express = require("express")
const dictionaryRoutes = require("./dictionary-routes")
const request = require("supertest")

jest.mock("../data/skiTerms.json", () => [
    {term: "adddas", defined: "test a"},
    {term: "adddqweweas", defined: "test b"},
    {term: "adsfadfgaeagvda", defined: "test c"},
    {term: "adddas", defined: "test d"},

])

const app = express();

app.use("/dictionary", dictionaryRoutes )

describe("dictionary routes", () => {
    it("GET / dictionnary success", async () => {
       const {body} = await request(app).get("/dictionary");
       expect(body).toEqual([
        {term: "adddas", defined: "test a"},
        {term: "adddqweweas", defined: "test b"},
        {term: "adsfadfgaeagvda", defined: "test c"},
        {term: "adddas", defined: "test d"},
    ])
    }); 
    
    it("DELETE / dictionary/adddas - success", () => {
        const {body} = await.request(app).delete("/dictionary/adddas");
        expect(body).toEqual({
            status: "success",
            removed: 'adddas',
            newLength: 3
          })
    })
}) 