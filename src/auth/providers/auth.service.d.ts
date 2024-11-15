import { SignInProvider } from "./sign-in.provider";
import { UserService } from "src/users/providers/user.service";
import { RefreshTokenDto } from "../dtos/refresh-token.dto";
import { SignInDto } from "../dtos/signin.dto";
import { RefreshTokensProvider } from "./refresh-tokens.provider";
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    private readonly refreshTokensProvider;
    constructor(usersService: UserService, signInProvider: SignInProvider, refreshTokensProvider: RefreshTokensProvider);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../../users/user.entity").User;
    }>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../../users/user.entity").User;
    }>;
}
