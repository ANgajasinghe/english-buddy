using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EnglishBuddy.Domain.Entities;
using Microsoft.IdentityModel.Tokens;
using Utility = EnglishBuddy.Domain.Common.Utility;

namespace EnglishBuddy.Application.Services
{
    public class JwtTokenService
    {
        public string GenerateAccessToken(ApplicationUser user)
        {
            // setting claims
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp,
                    new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString())
            };

            var secretBytes = Encoding.UTF8.GetBytes(Utility.Secret);
            var key = new SymmetricSecurityKey(secretBytes);
            var algorithm = SecurityAlgorithms.HmacSha256;
            var signingCredentials = new SigningCredentials(key, algorithm);
            var payload = new JwtPayload(claims);

            var token = new JwtSecurityToken(
                "server",
                "client",
                claims,
                DateTime.Now,
                DateTime.Now.AddDays(1),
                signingCredentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}