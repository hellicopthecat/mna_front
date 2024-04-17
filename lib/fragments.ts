import {gql} from "@apollo/client";

export const OWN_COMPANY_FRAGMENT = gql`
  fragment OWN_COMPANY_FRAGMENT on Company {
    id
    createdAt
    updateAt
    companyLogo
    companyName
    isManager
    isOwned
    companyOwner {
      id
      createdAt
      updateAt
      username
      avatar
      email
      firstName
      lastName
    }
    companyAdress {
      id
      createdAt
      updateAt
      country
      city
      streetAdress
      restAdress
      adressNum
    }
    companyManager {
      id
      createdAt
      updateAt
      username
      email
      firstName
      lastName
      avatar
    }
    connectingCompanyCount
    connectingCompany {
      companyName
      companyLogo
      id
      updateAt
      createdAt
    }
    connectedCompanyCount
    connectedCompany {
      companyName
      companyLogo
      id
      updateAt
      createdAt
    }
    companyProduct {
      id
      itemName
      itemPhoto
      itemProductId
      itemModelName
      itemCount
      createdAt
      updateAt
    }
    companyInNout {
      id
      updateAt
      createdAt
      totalAssets
      expendModel {
        id
        createdAt
        updateAt
        incomeTrue
        infoSubtitle
        money
        paymentType
        paymentsDone
      }
      expendMoney
      incomeModel {
        id
        createdAt
        updateAt
        incomeTrue
        infoSubtitle
        money
        paymentType
        paymentsDone
      }
      incomeMoney
    }
  }
`;
