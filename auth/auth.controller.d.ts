import { RefreshTokenDto } from "./dtos/refresh-token.dto";
import { SignInDto } from "./dtos/signin.dto";
import { AuthService } from "./providers/auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../users/user.entity").User;
    }>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../users/user.entity").User;
    }>;
}
