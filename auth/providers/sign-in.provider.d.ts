import { UserService } from "src/users/providers/user.service";
import { SignInDto } from "../dtos/signin.dto";
import { GenerateTokensProvider } from "./generate-tokens.provider";
import { HashingProvider } from "./hashing.provider";
export declare class SignInProvider {
    private readonly usersService;
    private readonly hashingProvider;
    private readonly generateTokensProvider;
    constructor(usersService: UserService, hashingProvider: HashingProvider, generateTokensProvider: GenerateTokensProvider);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../../users/user.entity").User;
    }>;
}
