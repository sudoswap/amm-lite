// Define the chain ID type
export const CHAIN_ID = {
  YOMINET: 'YOMINET',
  ZAAR: 'ZAAR'
} as const;

// Create a type from the values of CHAIN_ID
export type ChainIdType = typeof CHAIN_ID[keyof typeof CHAIN_ID];

// Define the contract addresses interface
interface ContractAddressesType {
  PAIR_FACTORY_V2_HOOKS: string;
  LINEAR_CURVE_V2: string;
  EXPONENTIAL_CURVE_V2: string;
  XYK_CURVE_V2: string;
  GDA_CURVE_V2: string;
  VERY_FAST_ROUTER_V2: string;
  MULTICALL: string;
  LISTING_BOOK: string;
  KAMI?: string;
}

// Define the contract addresses record type
export type ContractAddressesRecord = Record<ChainIdType, ContractAddressesType>;

// Export the contract addresses with proper typing
export const CONTRACT_ADDRESSES: ContractAddressesRecord = {
  [CHAIN_ID.YOMINET]: {
    PAIR_FACTORY_V2_HOOKS: '0x470C73Ed96D0b6DB8F152827510bffE2a69BA538',
    LINEAR_CURVE_V2: '0x3F33C248CEB275cbBB93adB138A32C76d9060D99',
    EXPONENTIAL_CURVE_V2: '0x6c4BBEC8E3544D4A58B3E2487CfA4097Ded19eDc',
    XYK_CURVE_V2: '0x38BA53D83dE7234A04E6F0ec5Fb779681e3940cf',
    GDA_CURVE_V2: '0x53f0E31E2B8084ce4dD5991EcF157B181fc38bC1',
    VERY_FAST_ROUTER_V2: '0x1A72CB0Ab23aaF24472855EF30b5714A1a87046B',
    MULTICALL: '0x14521bbB801ac766568d7CE82cFB2968b98B4Ca3',
    LISTING_BOOK: '0x048000C86B685e6eB69f6FcB0B1a5e7E5C80b130',
    KAMI: '0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677'
  },
  [CHAIN_ID.ZAAR]: {
    PAIR_FACTORY_V2_HOOKS: '0x13ea00baE2f9B4e50d5986e38D6744dE6741842c',
    LINEAR_CURVE_V2: '0x2286e66cc3b3f15aE6d88164F618F98f1Ce21581',
    EXPONENTIAL_CURVE_V2: '0x705fD2868348dF3Ea3f560E52B00C4c3DF6aEED2',
    XYK_CURVE_V2: '0x605145D263482684590f630E9e581B21E4938eb8',
    GDA_CURVE_V2: '0xEdFF12180AB7082aD1ad4D6e6337A51d4f1582ce',
    VERY_FAST_ROUTER_V2: '0x66f739c9Dd6c691fF577542513C31F04419F451A',
    MULTICALL: '0x53f0E31E2B8084ce4dD5991EcF157B181fc38bC1',
    LISTING_BOOK: '0x38BA53D83dE7234A04E6F0ec5Fb779681e3940cf'
  }
};