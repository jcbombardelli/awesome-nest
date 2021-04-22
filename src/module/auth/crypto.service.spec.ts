import { CryptoService } from "./crypto.service";

describe("Crypto service", () => {
    const crypto = new CryptoService();

    it("should generate a verifiable crypto hash", async () => {
        const passwordHash = await crypto.hash("pwd12345");

        expect(await crypto.compare("pwd12345", passwordHash)).toBeTruthy();
    });

    it("should return false with an invalid password", async () => {
        const passwordHash = await crypto.hash("abc32145");
        expect(await crypto.compare("pwd12345", passwordHash)).toBeFalsy();
    });
})