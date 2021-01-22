import {setAllCampaigns, Types} from "../campaigns"

describe('actions', () => {
    it('should create action that gets all campaigns', () => {
        const campaigns = [{
      "id": 2,
      "campaignId": 4,
      "ongId": 4,
      "userId": 0,
      "product": "Agasalhos",
      "quantity": 5,
      "message": "Gostaria de doar agasalhos para ajudar.",
      "scheduledDate": "2021-01-19T10:30",
      "ongName": "Hospital São Francisco",
      "adTitle": "Campanha do Agasalho Solidário",
      "endDate": "24/01/2021"
        }]

        const expectedAction = {
            type : Types.ALL_CAMPAIGNS,
            payload : campaigns
        }
        
        expect(setAllCampaigns(campaigns)).toEqual(expectedAction)
    })
})

