using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services.CharacterService
{
    public interface ICharacterService
    {
        List<Character> GetAllCharacter();
    }
}