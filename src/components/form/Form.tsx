import { ethers } from "ethers";
import { useEffect, useState } from "react";
import BuyButton from "../UI/BuyButton";
import styles from "./Form.module.css";

function Form() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [stakingToken, setStakingToken] = useState(null);
  const [stakedAmount, setStakedAmount] = useState("0");
  const [pendingReward, setPendingReward] = useState("0");
  const [statusMessage, setStatusMessage] = useState(
    "Please connect your wallet to interact."
  );
  const [stakeAmount, setStakeAmount] = useState("");

  const stakingTokenAddress = "0xCBDc94B77e5A39850E7BA7E21712072fb1cb54aB";
  const stakingContractAddress = "0x9458F085CFAcd94422fa2CDfF69b2d9C2de5f34A";

  const stakingContractABI = [
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "_stakingToken",
          type: "address",
        },
        { internalType: "uint256", name: "_rewardRate", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reward",
          type: "uint256",
        },
      ],
      name: "RewardPaid",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Staked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Unstaked",
      type: "event",
    },
    {
      inputs: [],
      name: "claimReward",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "getPendingReward",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "getStakedAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "stake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "stakes",
      outputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "rewardDebt", type: "uint256" },
        { internalType: "uint256", name: "lastStakedTime", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "stakingToken",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalStaked",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "unstake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const tokenABI = [
    {
      inputs: [
        { internalType: "uint256", name: "initialSupply", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  useEffect(() => {
    const checkEthereum = async () => {
      if (window.ethereum) {
        try {
          // Запрос на доступ к аккаунтам MetaMask
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);
          setStatusMessage('MetaMask доступен. Нажмите "Connect Wallet".');
        } catch (error) {
          console.error("Ошибка доступа к MetaMask:", error);
          setStatusMessage(
            "Ошибка доступа к MetaMask. Пожалуйста, разрешите доступ."
          );
        }
      } else {
        setStatusMessage("Пожалуйста, установите MetaMask!");
      }
    };

    checkEthereum();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setStatusMessage("Пожалуйста, установите MetaMask!");
        return;
      }

      // Запрос на подключение к MetaMask
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      const contract = new ethers.Contract(
        stakingContractAddress,
        stakingContractABI,
        signer
      );
      const stakingToken = new ethers.Contract(
        stakingTokenAddress,
        tokenABI,
        signer
      );

      setProvider(provider);
      setSigner(signer);
      setContract(contract);
      setStakingToken(stakingToken);

      // Обновление информации после подключения
      await updateUserInfo(signer, contract);

      setStatusMessage(
        `Кошелек подключен: ${signerAddress.substring(
          0,
          6
        )}...${signerAddress.substring(38)}`
      );
    } catch (error) {
      console.error("Ошибка при подключении кошелька:", error);
      setStatusMessage("Не удалось подключить кошелек!");
    }
  };

  const updateUserInfo = async (currentSigner, currentContract) => {
    if (!currentSigner || !currentContract) return;

    try {
      const userAddress = await currentSigner.getAddress();

      // Обновление застейканной суммы
      const stakedAmount = await currentContract.getStakedAmount(userAddress);
      const formattedStakedAmount = ethers.utils.formatUnits(stakedAmount, 18);
      setStakedAmount(formattedStakedAmount);

      // Обновление ожидающей награды
      const pendingReward = await currentContract.getPendingReward(userAddress);
      const formattedPendingReward = ethers.utils.formatUnits(
        pendingReward,
        18
      );
      setPendingReward(formattedPendingReward);
    } catch (err) {
      console.error("Ошибка при обновлении информации пользователя:", err);
    }
  };

  const stakeTokens = async () => {
    if (!contract || !stakingToken || !signer) {
      setStatusMessage("Пожалуйста, сначала подключите кошелек");
      return;
    }

    if (!stakeAmount || isNaN(stakeAmount) || parseFloat(stakeAmount) <= 0) {
      setStatusMessage("Пожалуйста, введите корректную сумму токенов");
      return;
    }

    try {
      setStatusMessage("Обработка транзакции...");
      const amountInWei = ethers.utils.parseUnits(stakeAmount, 18);

      // Проверка баланса токенов
      const userAddress = await signer.getAddress();
      const balance = await stakingToken.balanceOf(userAddress);

      if (balance.lt(amountInWei)) {
        setStatusMessage("Недостаточно токенов на балансе");
        return;
      }

      // Проверка разрешения
      const allowance = await stakingToken.allowance(
        userAddress,
        stakingContractAddress
      );

      if (allowance.lt(amountInWei)) {
        setStatusMessage("Подтверждение разрешения токенов...");
        const approveTx = await stakingToken.approve(
          stakingContractAddress,
          amountInWei
        );
        await approveTx.wait();
        setStatusMessage("Разрешение получено. Выполняется стейкинг...");
      }

      // Выполнение стейкинга
      const stakeTx = await contract.stake(amountInWei);
      await stakeTx.wait();

      setStatusMessage("Токены успешно застейканы!");
      await updateUserInfo(signer, contract);
      setStakeAmount("");
    } catch (err) {
      console.error("Ошибка при стейкинге:", err);
      setStatusMessage(`Ошибка при стейкинге: ${err.message}`);
    }
  };

  const unstakeTokens = async () => {
    if (!contract || !signer) {
      setStatusMessage("Пожалуйста, сначала подключите кошелек");
      return;
    }

    try {
      setStatusMessage("Обработка транзакции вывода средств...");
      const userAddress = await signer.getAddress();
      const stakedAmountWei = await contract.getStakedAmount(userAddress);

      if (stakedAmountWei.isZero()) {
        setStatusMessage("У вас нет застейканных токенов");
        return;
      }

      // Выполнение анстейкинга всех токенов
      const tx = await contract.unstake(stakedAmountWei);
      await tx.wait();

      setStatusMessage("Токены успешно выведены!");
      await updateUserInfo(signer, contract);
    } catch (err) {
      console.error("Ошибка при выводе средств:", err);
      setStatusMessage(`Ошибка при выводе средств: ${err.message}`);
    }
  };

  const claimReward = async () => {
    if (!contract || !signer) {
      setStatusMessage("Пожалуйста, сначала подключите кошелек");
      return;
    }

    try {
      setStatusMessage("Получение награды...");
      const userAddress = await signer.getAddress();
      const pendingRewardWei = await contract.getPendingReward(userAddress);

      if (pendingRewardWei.isZero()) {
        setStatusMessage("У вас нет доступных наград");
        return;
      }

      const tx = await contract.claimReward();
      await tx.wait();

      setStatusMessage("Награда успешно получена!");
      await updateUserInfo(signer, contract);
    } catch (err) {
      console.error("Ошибка при получении награды:", err);
      setStatusMessage(`Ошибка при получении награды: ${err.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Staking Contract</h2>
      <BuyButton
        id="connectWallet"
        className={styles.button}
        onClick={connectWallet}
      >
        Connect Wallet
      </BuyButton>
      <input
        type="number"
        id="stakeAmount"
        className={styles.input}
        placeholder="Stake Amount"
        value={stakeAmount}
        onChange={(e) => setStakeAmount(e.target.value)}
      />
      <div className={styles.but}>
        <BuyButton
          id="stakeTokens"
          className={styles.button}
          onClick={stakeTokens}
        >
          Stake Tokens
        </BuyButton>
        <BuyButton
          id="unstakeTokens"
          className={styles.button}
          onClick={unstakeTokens}
        >
          Unstake Tokens
        </BuyButton>
        <BuyButton
          id="claimReward"
          className={styles.button}
          onClick={claimReward}
        >
          Claim Reward
        </BuyButton>
      </div>
      <div className={`${styles.message}`} id="statusMessage">
        {statusMessage}
      </div>
      <div className={styles.status} id="stakedAmount">
        Staked: {stakedAmount}
      </div>
      <div className={styles.status} id="pendingReward">
        Unclaimed: {pendingReward}
      </div>
    </div>
  );
}

export default Form;
