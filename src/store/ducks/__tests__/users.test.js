import { setCurrentUser , Types} from "../user"

describe('actions', () => {
    it('Should create action to get current user', ()=> {
        const user = {
      "email": "thiago.linhares@email.com",
      "password": "$2a$10$HSWQpZ5hduWTQfuQ253wY.k07yAMbACUMd0Kb4xsC6wlFwK02En3a",
      "name": "Thiago Linhares",
      "email_confirmation": "thiago.linhares@email.com",
      "password_confirmation": "12345678",
      "ngo": false,
      "id": 0,
      "image" : "https://icons-for-free.com/iconfiles/png/512/free+outline+people+profile+ui+icon-1320196081912311498.pnghttps://icons-for-free.com/iconfiles/png/512/free+outline+people+profile+ui+icon-1320196081912311498.png"
    }

        const expectedAction = {
            type : Types.CURRENT_USER,
            payload: user
        }

        expect(setCurrentUser(user)).toEqual(expectedAction)
    }
      )
})
