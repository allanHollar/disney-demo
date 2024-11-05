import Search from "../search";

const Header = () => {
  return (
    <div className="flex justify-center p-[32px] w-full">
      <div className="flex flex-row w-[1200px]">
        <svg
          className="mr-10"
          width="96"
          height="40"
          viewBox="0 0 96 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M82.9669 17.3948C81.3442 17.7719 77.0585 17.9814 77.0585 17.9814L76.5314 19.6855C76.5314 19.6855 78.6535 19.5039 80.2069 19.6575C80.2069 19.6575 80.7062 19.6156 80.7617 20.2162C80.7894 20.8308 80.7201 21.4733 80.7201 21.4733C80.7201 21.4733 80.6785 21.8504 80.1653 21.9482C79.5689 22.0459 75.5467 22.2275 75.5467 22.2275L74.8948 24.4343C74.8948 24.4343 74.659 24.9372 75.2 24.7975C75.6993 24.6578 79.9156 23.8477 80.4704 23.9595C81.0529 24.0991 81.7187 24.9092 81.5245 25.6355C81.3026 26.5155 77.0862 29.2251 74.5342 29.0436C74.5342 29.0436 73.1889 29.1274 72.0654 27.2976C70.9836 25.5517 72.4399 22.2694 72.4399 22.2694C72.4399 22.2694 71.788 20.733 72.2735 20.1743C72.2735 20.1743 72.5509 19.9369 73.383 19.867L74.4233 17.7161C74.4233 17.7161 73.2443 17.7859 72.5509 16.9199C71.9129 16.0819 71.8574 15.7187 72.3567 15.4953C72.8837 15.2159 77.7658 14.336 81.1223 14.4477C81.1223 14.4477 82.3012 14.308 83.3414 16.3612C83.3414 16.3612 83.813 17.1993 82.9808 17.3948M70.3179 25.6635C69.9018 26.6831 68.7506 27.7586 67.3636 27.1021C65.9489 26.4317 63.7159 21.8504 63.7159 21.8504C63.7159 21.8504 62.8837 20.1464 62.7173 20.2022C62.7173 20.2022 62.537 19.867 62.4399 21.7386C62.3012 23.5963 62.4677 27.2138 61.7048 27.7865C61.0113 28.3452 60.1792 28.1077 59.7076 27.4513C59.3192 26.7948 59.1528 25.2165 59.3747 22.4649C59.6244 19.7134 60.2485 16.7803 61.0391 15.8724C61.8713 14.9505 62.537 15.621 62.7867 15.8724C62.7867 15.8724 63.8546 16.8501 65.6577 19.7413L65.9628 20.2721C65.9628 20.2721 67.5994 23.0236 67.7658 23.0097C67.7658 23.0097 67.9045 23.1493 68.0155 23.0376C68.1819 22.9957 68.1265 22.1018 68.1265 22.1018C68.1265 22.1018 67.8213 19.1268 66.2957 14.0985C66.2957 14.0985 66.0738 13.456 66.2263 12.8415C66.365 12.2828 66.9614 12.5621 66.9614 12.5621C66.9614 12.5621 69.2638 13.6795 70.3872 17.4507C71.4968 21.2219 70.7478 24.6438 70.3317 25.6635M59.028 15.9841C58.8061 16.3752 58.709 16.9199 57.752 17.0736C57.752 17.0736 48.4593 17.73 48.0016 18.3865C48.0016 18.3865 47.6965 18.7776 48.1958 18.8753C48.7229 18.9871 50.831 19.2664 51.8297 19.3223C52.9115 19.3223 56.5453 19.3502 57.8768 20.9984C57.8768 20.9984 58.6396 21.7805 58.6119 23.5544C58.5842 25.3701 58.2652 26.0126 57.5578 26.6691C56.8227 27.2837 50.5259 30.133 46.4621 25.7752C46.4621 25.7752 44.6036 23.6801 47.114 22.0878C47.114 22.0878 48.917 20.9704 53.5356 22.2694C53.5356 22.2694 54.9226 22.7722 54.8671 23.289C54.7839 23.8477 53.7159 24.4064 52.1625 24.3785C50.6646 24.3366 49.555 23.6103 49.777 23.736C49.985 23.8058 48.1542 22.8421 47.5856 23.4985C47.0308 24.1131 47.1695 24.4762 47.7243 24.8534C49.1112 25.6635 54.562 25.3701 56.1847 23.5404C56.1847 23.5404 56.8366 22.8002 55.8518 22.1996C54.881 21.6409 52.0516 21.2917 50.9559 21.2498C49.9156 21.1939 46.0183 21.2498 45.4358 20.2302C45.4358 20.2302 44.881 19.5039 45.4912 17.5205C46.1292 15.4254 50.6646 14.6153 52.6341 14.4477C52.6341 14.4477 58.0432 14.2242 59.0557 15.3416C59.0557 15.3416 59.1944 15.593 59.028 15.9701M43.6882 28.2614C43.0363 28.7502 41.6494 28.5407 41.2471 27.982C40.8588 27.4932 40.7201 25.5657 40.7894 22.5348C40.8865 19.434 40.9281 15.6349 41.6216 15.0204C42.3151 14.4198 42.7312 14.9505 43.0086 15.3556C43.286 15.7746 43.6466 16.2355 43.7021 17.1993C43.7853 18.177 44.0211 23.2052 44.0211 23.2052C44.0211 23.2052 44.3262 27.7865 43.7021 28.2614M45.0752 11.9196C43.1611 12.5761 41.8574 12.3666 40.7478 11.8777C40.2624 12.7577 39.9711 13.023 39.6105 13.0789C39.0557 13.1348 38.5703 12.2409 38.501 11.9615C38.39 11.752 38.1265 11.3749 38.4455 10.5229C37.3636 9.54518 37.2804 8.23226 37.4746 7.35232C37.7243 6.31873 39.555 2.43582 45.1029 1.9749C45.1029 1.9749 47.8213 1.77936 48.2929 3.23196H48.3761C48.3761 3.23196 51.0113 3.23196 50.9559 5.6064C50.9559 7.98084 48.0433 10.9419 45.0752 11.9615M47.5439 5.15945C45.7964 5.43879 43.1057 7.7853 41.8158 9.72676C43.7991 10.0899 47.2666 9.95024 48.82 6.79362C48.82 6.79362 49.555 4.81026 47.5439 5.15945ZM39.874 6.69585C39.3193 7.60373 39.2915 8.14845 39.555 8.5116C40.2069 7.53389 41.3581 5.99749 43.0918 4.7963C41.7603 4.93597 40.6369 5.49466 39.874 6.69585ZM87.1278 28.1636C85.8518 31.3202 84.77 34.5187 84.1459 39.3095C84.1459 39.3095 84.0072 40.2453 83.2443 39.9381C82.4815 39.6587 81.2332 38.4017 80.9558 36.6278C80.6785 34.3092 81.7048 30.3984 83.7991 25.9009C83.1889 24.9232 82.7589 23.4706 83.1056 21.4314C83.1056 21.4314 83.6604 17.6602 87.4052 14.2522C87.4052 14.2522 87.8491 13.8751 88.0987 14.0008C88.4038 14.1404 88.279 15.3416 88.0294 15.9562C87.8074 16.5428 86.1431 19.448 86.1431 19.448C86.1431 19.448 85.1029 21.4314 85.3941 22.9817C87.3636 19.9369 91.8435 13.7633 94.6174 15.7187C96.3789 16.9758 96.3789 21.0263 95.0613 23.3728C94.021 25.2305 91.0807 29.0715 87.1556 28.1776M92.9253 18.6798C91.899 19.7972 90.0682 21.9202 88.6257 24.7975C90.1514 24.6299 91.6355 23.7779 92.0932 23.3449C92.8282 22.6884 94.5203 20.9146 94.2568 18.5681C94.2568 18.5681 94.0904 17.3389 92.9253 18.6798ZM30.7894 29.8118C25.8796 31.3202 21.2472 30.6219 18.7229 29.9514C18.6535 30.985 18.5426 31.418 18.3761 31.5856C18.182 31.8091 16.5731 32.7309 15.6854 31.418C15.2971 30.7895 15.1029 29.6581 14.992 28.6245C9.30541 26.0266 6.67019 22.1996 6.58697 22.0599C6.44827 21.9202 5.1584 20.5654 6.44827 18.8893C7.65493 17.3808 11.6494 15.8584 15.2277 15.2578C15.3664 12.185 15.6993 9.81056 16.1293 8.76301C16.6424 7.50596 17.2943 8.62334 17.8768 9.46138C18.3484 10.0899 18.6397 12.7856 18.6674 14.9366C20.9975 14.8248 22.4122 14.9924 25.0058 15.4953C28.4177 16.0819 30.6924 17.8418 30.5121 19.8251C30.3456 21.7806 28.5703 22.5907 27.8768 22.6465C27.1833 22.7024 26.0738 22.1856 26.0738 22.1856C25.2971 21.8225 26.0044 21.4872 26.906 21.0962C27.9046 20.6073 27.6827 20.1184 27.6827 20.1184C27.322 19.0011 22.8976 18.2608 18.501 18.2608C18.501 20.7051 18.5981 24.7556 18.6674 27.1161C21.7465 27.7027 24.0488 27.577 24.0488 27.577C24.0488 27.577 35.2832 27.2557 35.6022 20.0346C35.9489 12.7996 24.3678 5.87178 15.838 3.69288C7.32206 1.44414 2.49543 3.03642 2.07934 3.24593C1.62164 3.4694 2.03773 3.55321 2.03773 3.55321C2.03773 3.55321 2.49543 3.62304 3.32761 3.90239C4.15978 4.18174 3.49404 4.60075 3.49404 4.60075C2.03773 5.10358 0.414988 4.81026 0.0959868 4.13983C-0.223014 3.48337 0.304031 2.88278 0.928164 2.00283C1.51069 1.09496 2.17643 1.12289 2.17643 1.12289C12.7173 -2.57844 25.5883 4.05603 25.5883 4.05603C37.6272 10.1737 39.6799 17.3669 39.458 20.1603C39.2638 22.9119 38.2097 27.563 30.7894 29.8257M7.62719 19.8251C6.4344 20.3838 7.26658 21.2777 7.26658 21.2777C9.51346 23.6941 12.2596 25.2165 14.8949 26.1663C15.2 21.9761 15.1723 20.4816 15.1723 18.3725C11.0946 18.6519 8.73676 19.3223 7.62719 19.8251Z"
            fill="black"
          />
        </svg>

        <Search />

        <svg
          className="ml-10"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#054553" />
          <path
            d="M15 32C17.3358 29.5226 20.507 28 24 28C27.493 28 30.6642 29.5226 33 32M28.5 19.5C28.5 21.9853 26.4853 24 24 24C21.5147 24 19.5 21.9853 19.5 19.5C19.5 17.0147 21.5147 15 24 15C26.4853 15 28.5 17.0147 28.5 19.5Z"
            stroke="#C2CCDA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
