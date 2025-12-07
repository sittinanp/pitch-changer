import bcrypt from "bcrypt";
import prisma from "../config/prisma"; 

import { generateRefreshToken , hashRefreshToken ,createAccessToken} from "../utils/token" 
import { RegisterDTO } from "../model/auth/dto/register.dto";
import { RegisterResponse } from '../model/auth/response/register.response';
import { LoginDTO } from "../model/auth/dto/login.dto";

export async function register( register_data : RegisterDTO ): Promise< RegisterResponse >{
    const existingAccount = await prisma.account.findFirst({
        where: {
            OR: [
                { email: register_data.email },
                { username: register_data.username },
            ]
        }
    });
    if (existingAccount) throw new Error("Email/Username already registered");

    const hashedPassword = await bcrypt.hash(register_data.password, 10);

    const user = await prisma.account.create({
        data: {
            email : register_data.email,
            username : register_data.username,
            password: hashedPassword,
        },
    });
    return {
        email : user.email,
        username : user.username
    };
}

export async function login( login_data : LoginDTO ) {
    const account = await prisma.account.findUnique({where : {username : login_data.username}});

    if(!account) throw new Error("Invalid username or password");
    
    const isPasswordCorrect = await bcrypt.compare(login_data.password,account.password);
    if(!isPasswordCorrect) throw new Error("Invalid username or password");

    const accessToken = createAccessToken({
        userId: account.id,
        username: account.username,
    });

    const refreshToken = generateRefreshToken();

    const hashedRefreshToken = await hashRefreshToken(refreshToken);

    await prisma.acct_refresh_token.create({
        data: {
            account_id: account.id,
            token_hash: hashedRefreshToken,
            expires_at: new Date(Date.now() + Number(process.env.REFRESH_TOKEN_EXP_MS)),  
            ip_address: login_data?.ip,         // optional
            user_agent: login_data?.user_agent,         // optional
            revoked: false,
        },
    });

    return {
        accessToken,
        refreshToken,
        account: {
            id: account.id,
            username: account.username,
            email: account.email,

        },
    };
}