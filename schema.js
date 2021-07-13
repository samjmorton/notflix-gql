const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    properties: [Property]
    propertyById(id: ID): Property
    rates: [Rate]
    ratesByRatePlanCode(ratePlanCode: String): Rate
    reviews: [Review]
    reviewsByPropertyCode(propertyCode: String): [Review]
		profile(userName: String): Profile
  }

	type Profile {
		email: String,
    userName: String,
    name: String,
    accounts: [Account]
	}

	type Account {
		profileImage: String,
		name: String
	}

  type Mutation {
    toggleFavoriteProperty(id: ID): Property
  }

  type Property {
    favorite: Boolean
    id: String
    name: String
    city: String
    country: String
    line1: String
    postalCode: String
    subdivision: String
    description: String
    brandCode: String
    brandName: String
    productCode: String
    productName: String
    coOpParticipant: Boolean
    phone: String
    lat: String
    lon: String
    rates: [Rate]
    reviews: [Review]
  }

  type Rate {
    ratePlanCode: String
    name: String
    defaultName: String
    from: String
    currencyCode: String
    cancelExpired: Boolean
    taxInclusive: Boolean
    maxRoomsPerBooking: String
    shortDescHtml: String
    longDescHtml: String
    requiresCP: Boolean
    strikeThrough: Boolean
    subTitle1: String
    paymentPolicyType: String
    extraPersonChargeExcluded: Boolean
    childStayFree: Boolean
    guaranteePolicy: String
    savePercentage: String
    freeCancellation: Boolean
    overrideGroupAdvanceBookingRule: Boolean
  }

  type Review {
    UserNickname: String
    Rating: String
    ReviewText: String
    ProductId: String
    UserEmailAddress: String
    TotalNegativeFeedbackCount: String
    RatingRange: String
    UserLocation: String
    CampaignId: String
    TotalCommentCount: String
    TotalPositiveFeedbackCount: String
    IsRatingsOnly: Boolean
    LastModificationTime: String
    Pros: String
    AuthorId: String
    Helpfulness: String
    SubmissionTime: String
    Title: String
    TotalFeedbackCount: String
    ModerationStatus: String
    IsFeatured: Boolean
    Cons: String
    SubmissionId: String
    IsSyndicated: Boolean
    IsRecommended: Boolean
    LastModeratedTime: String
    Id: String
    ContentLocale: String
  }
`;
