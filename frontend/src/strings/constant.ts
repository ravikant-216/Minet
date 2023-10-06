export const DASHBOARD = 'Dashboard'
export const CAREERS = 'Careers'
export const LEGAL_AND_PRIVACY = 'Legal & Privacy'
export const MINET_TRADEMARK = '© 2021 Minet'
export const NEED_HELP = 'NEED HELP'
import paymentBitcoin from '@Assets/icons/paymentBitcoin.svg'
import theme from '@/theme'
import bitcoin from '@Assets/icons/blackBitcoin.svg'
import card from '@Assets/icons/bank-card.svg'
import money from '@Assets/icons/dollar.svg'
import ethirum from '@Assets/icons/ethereum.svg'
import FacebookIcon from '@Assets/icons/facebook.svg'
import GoogleIcon from '@Assets/icons/google.svg'
import MicrosoftIcon from '@Assets/icons/microsoft.svg'
import tether from '@Assets/icons/tether.svg'
import wallet from '@Assets/icons/wallet.svg'
import xrp from '@Assets/icons/xrp.svg'
import Ethirum from '@Assets/icons/ethirum2.svg'
import bitcoinTable from '@Assets/icons/bitcoinTable.svg'
import cardano from '@Assets/icons/cardano.svg'
import dodge from '@Assets/icons/dodge.svg'
import DashBoardIcon from '@Assets/icons/dashBoardIcon.svg'
import MinetLogo from '@Assets/icons/minet.svg'
import PortfolioIcon from '@Assets/icons/portFolio.svg'
import TradeIcon from '@Assets/icons/tradeIcon.svg'

import { NavigationBarItem, PaymentMethodType } from '@/utils/types'
import binance from '@Assets/icons/binance.svg'
import bitcoin1 from '@Assets/icons/bitcoin1.svg'
import dogecoin from '@Assets/icons/dogecoin.svg'
import ethereum from '@Assets/icons/ethereum1.svg'
import LogoutIcon from '@Assets/icons/logout.svg'
import NotificationIcon from '@Assets/icons/notification.svg'
import polkadot from '@Assets/icons/polkadot.svg'
import tether1 from '@Assets/icons/tether1.svg'
import xrp1 from '@Assets/icons/xrp1.svg'

export const total = 'Total'
export const minetFee = 'transaction fee'
export const DELIVERY_FEE = 'Delivery fees'
export const DEPOSIT_TO = 'Deposit to'
export const PurchaseEtherium = {
  paymentIcon: card,
  paymentValue: 'Visa credit ...8845',
  depositIcon: wallet,
  depositValue: 'Etherium wallet',
  deleveryFee: '0.005 ETH',
  paymentText: 'Payment method',
}

export const SellBitcoin = {
  paymentIcon: paymentBitcoin,
  paymentValue: 'Bitcoin wallet',
  depositIcon: money,
  depositValue: 'Rupee Coin',
  deleveryFee: '0.001 BTC',
  paymentText: 'Paying through',
}
export const GRAPH_DATA = [
  {
    name: 'Bitcoin',
    data: [20, 38, 35, 52, 42, 47],
  },
  {
    name: 'Total Investment',
    data: [19, 30, 27, 35, 34, 38],
  },
]

export const PLOTS_DATA = [
  'JUN 8',
  'JUN 15',
  'JUN 22',
  'JUN 29',
  'JUL 6',
  'JUL 13',
]

export const SINGLE_GRAPH_LOSS_DATA = [0, 120, 100, 90, 50, 150, 20, 60, 30]

export const SINGLE_GRAPH_PROFIT_DATA = [0, 100, 50, 75, 75, 150, 10, 100, 140]

export const SINGLE_GRAPH_DATA = [50, 100, 95, 125, 120, 125]

export const BITCOIN = 'Bitcoin'
export const CRYPTO = 'crypto'
export const AMOUNT_DETAILS = 'Amount Details'
export const BUY_MAX = 'Buy max'
export const SELL_MAX = 'Sell max'
export const USD = 'USD Coin(cash)'

export const TRANSACTION_CARD_DATE = 'June 23'
export const TRANSACTION_CARD_COIN_NAME = 'Bitcoin BTC'
export const TRANSACTION_TYPE = ['Sold', 'Purchased']
export const TRANSACTION_IN_CRYPTO = '-0.0234510 BTC'
export const TRANSACTION_IN_DOLLAR = '+$34,000.00'
export const ALTERNATE_MESSAGE = 'Tick Image'
export const PRICE_CORRELATION_WITH = 'Price correlation with'

export const CORRELATION_CARD = [
  {
    id: 1,
    cryptoImage: bitcoin,
    cryptoName: 'Bitcoin',
    value: 'Moves tightly together',
    amount: 3285553.73,
    value1: 100,
  },
  {
    id: 2,
    cryptoImage: ethirum,
    cryptoName: 'Ethereum',
    value: 'Moves tightly together',
    amount: 230966.85,
    value1: 86,
  },
  {
    id: 3,
    cryptoImage: xrp,
    cryptoName: 'XRP',
    value: 'Moves tightly together',
    amount: 60.02,
    value1: 10,
  },
  {
    id: 4,
    cryptoImage: tether,
    cryptoName: 'Tether',
    value: 'Moves tightly together',
    amount: 74.28,
    value1: 2,
  },
  {
    id: 5,
    cryptoImage: bitcoin,
    cryptoName: 'Bitcoin',
    value: 'Moves tightly together',
    amount: 3285553.73,
    value1: 100,
  },
  {
    id: 6,
    cryptoImage: ethirum,
    cryptoName: 'Ethereum',
    value: 'Moves tightly together',
    amount: 230966.85,
    value1: 86,
  },
  {
    id: 7,
    cryptoImage: xrp,
    cryptoName: 'XRP',
    value: 'Moves tightly together',
    amount: 60.02,
    value1: 10,
  },
  {
    id: 8,
    cryptoImage: tether,
    cryptoName: 'Tether',
    value: 'Moves tightly together',
    amount: 74.28,
    value1: 2,
  },
]

export const MARKET_CAP = 'Market cap'
export const VOL_24_H = 'Vol. 24H'
export const CIRCULATION_SUPPLY = 'Circulating Supply'
export const ADD_TO_WATCHLIST = 'ADDED TO WATCHLIST'
export const TIME_PERIOD = [
  { key: 1, value: '1H' },
  { key: 2, value: '24H' },
  { key: 3, value: '1W' },
  { key: 4, value: '1M' },
  { key: 5, value: '1Y' },
  { key: 6, value: 'ALL' },
]

export const SCROLLBAR_DATA = [
  {
    name: 'Bitcoin',
    background: theme.palette.tabs.BITCOIN,
  },
  {
    name: 'XRP',
    background: theme.palette.tabs.XRP,
  },
  {
    name: 'Polkadot',
    background: theme.palette.tabs.POLKADOT,
  },
  {
    name: 'Ethereum',
    background: theme.palette.tabs.ETHEREUM,
  },
  {
    name: 'Tether',
    background: theme.palette.tabs.TETHER,
  },
  {
    name: 'Ethereum 2',
    background: theme.palette.tabs.ETHEREUM_2,
  },
  {
    name: 'Dodge Coin',
    background: theme.palette.tabs.DOGE,
  },
  {
    name: 'Cardano',
    background: theme.palette.tabs.BITCOIN,
  },
  {
    name: 'USD Coin',
    background: theme.palette.tabs.XRP,
  },
  {
    name: 'Binance-USD',
    background: theme.palette.tabs.POLKADOT,
  },
  {
    name: 'Solana',
    background: theme.palette.tabs.ETHEREUM,
  },
  {
    name: 'Bitcoin Coin',
    background: theme.palette.tabs.TETHER,
  },
]
export const PaymentOptions: PaymentMethodType[] = [
  {
    name: 'USD Coin (Cash)',
    balance: '$34,000',
    type: 'Default',
  },
]
export const PAYMENT_METHOD = 'Payment Method'
export const PASSWORD_RESET_SUCCESS = 'Password reset successful'
export const PASSWORD_RESET_INSTRUCTION =
  'Click on button below to proceed to login'

export const MY_PORTFOLIO_VALUE = 'My portfolio value'

export const TOTAL_INVESTMENT = 'Total Investment'

export const MOCK_DATA_ONE = {
  series: GRAPH_DATA,
  totalInvestmentsData: {
    title: 'Total Investments',
    trendRate: 5.0,
    amount: '1000.00',
  },
  cryptoInvestmentsData: {
    title: 'Crypto Investments',
    trendRate: -2.5,
    amount: '500.00',
  },
  plotData: PLOTS_DATA,
}

export const MOCK_DATA_TWO = {
  totalInvestmentsData: {
    title: 'Total Investments',
    trendRate: 0.0,
    amount: '0000.00',
  },
}
export const EMAIL = 'Email'
export const FORGOTPASSWORD = 'Forgot Password'
export const RESET_LINK = 'Send Reset Link'
export const LOGIN = 'Login'
export const BACK = 'Back to '
export const RESET_CODE = 'Reset Code'
export const RESET_PASSWORD = 'Reset Password'
export const CODE = '8 digits code'
export const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
export const MOCK_MAIL = 'you@company.com'

export const TRADE_SCREEN_TABS = [
  {
    value: 'All Assets',
    label: 'All Assets',
  },
  {
    value: 'Watchlist',
    label: 'Watchlist',
  },
]
export const NavigatonItems: NavigationBarItem[] = [
  { value: 'home', logo: MinetLogo },
  { value: 'dashboard', logo: DashBoardIcon },
  { value: 'portfolio', logo: PortfolioIcon },
  { value: 'trade', logo: TradeIcon },
  { value: 'notification', logo: NotificationIcon },
  { value: 'logout', logo: LogoutIcon },
]

export const BUY_NOW = 'BUY NOW'

export const SELL_NOW = 'SELL NOW'

export const TRANSACTION_FEE = 'transaction fee'

export const TOTOAL = 'Total'
export const SPEED_DELIVERY = 'Select speed delivery'

export const INSTANT_TIME = 'Instant : 2-5 min'

export const SELECT_DELIVERY_DATA = [
  {
    id: 1,
    label1: 'Instant',
    label2: '2-5 minutes',
    infoBitcoin: 'Delivery fees: 0.001BTC',
    infoEthereum: 'Delivery fees: 0.005ETH',
  },
  {
    id: 2,
    label1: 'Faster',
    label2: '4 hours',
    infoBitcoin: 'Delivery fees: 0.0001BTC',
    infoEthereum: 'Delivery fees: 0.0005ETH',
  },
  {
    id: 3,
    label1: 'Fast',
    label2: '120 hours',
    infoBitcoin: 'Delivery fees: 0.00001BTC',
    infoEthereum: 'Delivery fees: 0.00005ETH',
  },
  { id: 4, label1: 'None', label2: '', infoBitcoin: '', infoEthereum: '' },
]
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

export const PASSWORD_HINT = 'Please enter a valid password'
export const PASSWORD_MESSAGE =
  ' A min of 8 charaters with atleasr 1 special character and number included'
export const PASSWORD_MATCH = 'Passwords do not match'
export const PASSWORD_ENTER = 'Enter Password'
export const PASSWORD_RE_ENTER = 'Re-Enter Password'
export const CURRENT_VALUE = 'Current Value'

export const COINS = [
  {
    id: 1,
    name: 'Bitcoin',
    src: bitcoin,
    label: 'BTC',
    price: 3285553.73,
    change: '+1.06%',
    marketCap: 60.1,
    checked: false,
  },
  {
    id: 2,
    name: 'Ethereum',
    src: ethirum,
    label: 'ETH',
    price: 126678.1,
    change: '-5.49%',
    marketCap: 25.4,
    checked: false,
  },
  {
    id: 3,
    name: 'Ethereum 2',
    src: Ethirum,
    label: 'ETH2',
    price: 216678.1,
    change: '-5.49%',
    marketCap: 25.4,
    checked: false,
  },
  {
    id: 4,
    name: 'Tether',
    src: tether,
    label: 'USDT',
    price: 74.31,
    change: '+0.11%',
    marketCap: 4.6,
    checked: false,
  },
  {
    id: 5,
    name: 'Bitcoin Coin',
    src: bitcoinTable,
    label: 'BNB',
    price: 24942.54,
    change: '-3.69%',
    marketCap: 4.2,
    checked: false,
  },
  {
    id: 6,
    name: 'Cardano',
    src: cardano,
    label: 'ADA',
    price: 104.52,
    change: '-1.82%',
    marketCap: 3.4,
    checked: false,
  },
  {
    id: 7,
    name: 'XRP',
    src: xrp,
    label: 'XRP',
    price: 57.21,
    change: '+1.11%',
    marketCap: 2.7,
    checked: false,
  },
  {
    id: 8,
    name: 'Dodge Coin',
    src: dodge,
    label: 'DOC',
    price: 17.64,
    change: '-6.96%',
    marketCap: 2.3,
    checked: false,
  },
  {
    id: 9,
    name: 'USD Coin',
    src: bitcoin,
    label: 'USD',
    price: 74.26,
    change: '+1.01%',
    marketCap: 2.1,
    checked: false,
  },
  {
    id: 10,
    name: 'Binance',
    src: xrp,
    label: 'BIN',
    price: 30054.88,
    change: '-1.09%',
    marketCap: 1.1,
    checked: false,
  },
  {
    id: 11,
    name: 'Polkadot',
    src: bitcoinTable,
    label: 'PKD',
    price: 1642.39,
    change: '+2.06',
    marketCap: 2.3,
    checked: false,
  },
]

export const NAME = 'Name'
export const PRICE = 'Price'
export const CHANGE = 'Change'
export const MARKETCAP = 'MarketCap'
export const WATCH = 'Watch'
export const ALTERNATE = 'Up and Down Arrow'
export const SOCIAL_LOGIN_DATA = [
  { id: 1, icon: GoogleIcon, label: 'Google' },
  { id: 2, icon: FacebookIcon, label: 'Facebook' },
  { id: 3, icon: MicrosoftIcon, label: 'Microsoft' },
]
export const LOGIN_HEADING = 'Login to Minet'
export const PASSWORD = 'Password'
export const SIGN_IN = 'Sign in'
export const OR = 'Or'
export const DO_NOT_HAVE_ACCOUNT = 'Don’t have an account?'
export const EMAIL_IS_REQUIRED = 'Email is required'
export const NAME_IS_REQUIRED = 'Name is required'
export const IN_VALID_EMAIL = 'Invalid email format'
export const IN_VALID_USERNAME = 'Invalid username'
export const PASSWORD_IS_REQUIRED = 'Password is required'

export const enum PasswordValidationMessage {
  MESSAGE_MIN_LENGTH = 'Password should have at least 8 characters.',
  MESSAGE_SPECIAL_CHARS_REGEX = 'Password should contain at least one special character (!@#$%^&*(),.?":{}|<>).',
  MESSAGE_NUMBER_REGEX = 'Password should contain at least one number (0-9).',
  MESSAGE_LOWERCASE_REGEX = 'Password should contain at least one lowercase letter (a-z).',
  MESSAGE_UPPERCASE_REGEX = 'Password should contain at least one uppercase letter (A-Z).',
  MESSAGE_NO_SPACES = 'Password should not contain the spaces',
}
export const SIGN_UP = 'Signup'
export const CARDS = [
  { icon: ethereum, label: 'Ethereum', subLabel: '$30,054.88' },
  { icon: bitcoin1, label: 'Bitcoin', subLabel: '$30,054.88' },
  { icon: binance, label: 'Binance', subLabel: '$30,054.88' },
  { icon: tether1, label: 'Tether', subLabel: '$30,054.88' },
  { icon: cardano, label: 'Cardano', subLabel: '$30,054.88' },
  { icon: xrp1, label: 'XRP', subLabel: '$30,054.88' },
  { icon: dogecoin, label: 'Dogecoin', subLabel: '$30,054.88' },
  { icon: polkadot, label: 'Polkadot', subLabel: '$30,054.88' },
]

export const SignUP = 'Signup with Minet'
export const NAME_LABEL = 'Name'
export const NAME_PLACEHOLDER = 'Eg: John Doe'
export const EMAIL_PLACEHOLDER = 'you@company.com'
export const CREATE_PASSWORD_PLACEHOLDER = 'Create Password'
export const PASSWORD_CHECK =
  'A min of 8 charaters with atleast 1 special character and number included'
export const SIGN_UP_BUTTON = 'Sign Up'
export const ALREADY_HAVE_AN_ACCOUNT = 'Already have an account?'
export const PURCHASE = 'Purchase'
export const TRANSACTION_MESSAGE =
  'is completed, please check your balance in your'
export const RUPEE_COIN = 'Rupee coin'
export const CRYPTO_WALLET = 'crypto wallet'
export const SELL_CRYPTO = 'SELL CRYPTO'
export const BUY_CRYPTO = 'BUY CRYPTO'
export const USD_COIN_BUTTON = 'GO TO USD COIN'
export const Sell = 'Sell'
export const SELL = 'Sell'
export const BUY = 'Buy'
export const IMAGE = 'Image'
export const TOTAL_BALANCE = 'Total balance'
export const ONE_M = '1M'
export const DASHBOARD1 = 'dashboard'
export const PORTFOLIO = 'portfolio'
export const TRADE = 'trade'
export const NOTIFICATION = 'notification'
export const LOGOUT = 'logout'
