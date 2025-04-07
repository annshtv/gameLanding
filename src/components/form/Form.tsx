// import React, { useState, useEffect } from 'react';
// import styles from './Form.module.css';
// import BuyButton from '../UI/BuyButton';
// import { ethers } from 'ethers';
// import { Web3Provider } from 'ethers';


// function Form() {
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [stakingToken, setStakingToken] = useState(null);
//   const [stakedAmount, setStakedAmount] = useState('0');
//   const [pendingReward, setPendingReward] = useState('0');
//   const [statusMessage, setStatusMessage] = useState('Please connect your wallet to interact.');
//   const [stakeAmount, setStakeAmount] = useState(''); 

//   const stakingTokenAddress = "0xCBDc94B77e5A39850E7BA7E21712072fb1cb54aB";
//   const stakingContractAddress = "0x9458F085CFAcd94422fa2CDfF69b2d9C2de5f34A";

//   const stakingContractABI = [
//     {
//       "inputs": [
//           { "internalType": "contract IERC20", "name": "_stakingToken", "type": "address" },
//           { "internalType": "uint256", "name": "_rewardRate", "type": "uint256" }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
//           { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
//           { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }
//       ],
//       "name": "RewardPaid",
//       "type": "event"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
//           { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
//       ],
//       "name": "Staked",
//       "type": "event"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
//           { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
//       ],
//       "name": "Unstaked",
//       "type": "event"
//   },
//   {
//       "inputs": [],
//       "name": "claimReward",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
//       "name": "getPendingReward",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
//       "name": "getStakedAmount",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "owner",
//       "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "renounceOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "rewardRate",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }],
//       "name": "stake",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
//       "name": "stakes",
//       "outputs": [
//           { "internalType": "uint256", "name": "amount", "type": "uint256" },
//           { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" },
//           { "internalType": "uint256", "name": "lastStakedTime", "type": "uint256" }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "stakingToken",
//       "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "totalStaked",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }],
//       "name": "unstake",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   }
//   ];

//   const tokenABI = [
//     {
//       "inputs": [
//           { "internalType": "uint256", "name": "initialSupply", "type": "uint256" }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
//           { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
//           { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
//       ],
//       "name": "Approval",
//       "type": "event"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
//           { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
//           { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
//       ],
//       "name": "Transfer",
//       "type": "event"
//   },
//   {
//       "inputs": [
//           { "internalType": "address", "name": "", "type": "address" },
//           { "internalType": "address", "name": "", "type": "address" }
//       ],
//       "name": "allowance",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           { "internalType": "address", "name": "spender", "type": "address" },
//           { "internalType": "uint256", "name": "value", "type": "uint256" }
//       ],
//       "name": "approve",
//       "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   },
//   {
//       "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
//       "name": "balanceOf",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "decimals",
//       "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "name",
//       "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "totalSupply",
//       "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           { "internalType": "address", "name": "to", "type": "address" },
//           { "internalType": "uint256", "name": "value", "type": "uint256" }
//       ],
//       "name": "transfer",
//       "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           { "internalType": "address", "name": "from", "type": "address" },
//           { "internalType": "address", "name": "to", "type": "address" },
//           { "internalType": "uint256", "name": "value", "type": "uint256" }
//       ],
//       "name": "transferFrom",
//       "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
//       "stateMutability": "nonpayable",
//       "type": "function"
//   }
//   ];

//   console.log(ethers);
//   console.log(ethers.PocketProvider.Web3Provider);
//   // console.log(ethers.provider);
  

//   useEffect(() => {
//     if (window.ethereum) {
//       setProvider(new ethers.providers.Web3Provider(window.ethereum));
//     } else {
//       setStatusMessage('Please install MetaMask!');
//     }
//   }, []);

//   const connectWallet = async () => {
//     try {
//       if (!window.ethereum) {
//         setStatusMessage('Please install MetaMask!');
//         return;
//       }

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(stakingContractAddress, stakingContractABI, signer);
//       const stakingToken = new ethers.Contract(stakingTokenAddress, tokenABI, signer);

//       setProvider(provider);
//       setSigner(signer);
//       setContract(contract);
//       setStakingToken(stakingToken);

//       await updateStakedAmount();
//       await updatePendingReward();

//       setStatusMessage('Wallet connected successfully!');
//     } catch (error) {
//       console.error(error);
//       setStatusMessage('Failed to connect wallet!');
//     }
//   };

//   const stakeTokens = async () => {
//     if (!stakeAmount || isNaN(stakeAmount) || stakeAmount <= 0) {
//       alert("Please enter a valid amount of tokens.");
//       return;
//     }

//     try {
//       const amountInWei = ethers.utils.parseUnits(stakeAmount, 18);

//       const approveTx = await stakingToken.approve(stakingContractAddress, amountInWei);
//       await approveTx.wait();
//       console.log("Tokens approved for staking");

//       const stakeTx = await contract.stake(amountInWei);
//       await stakeTx.wait();

//       alert("Tokens staked successfully!");
//       await updateStakedAmount();
//       await updatePendingReward();
//       setStakeAmount('');
//     } catch (err) {
//       console.error("Error during staking:", err);
//       alert("Error during staking: " + err.message);
//     }
//   };

//   const unstakeTokens = async () => {
//     const amount = ethers.utils.parseUnits("10", 18);
//     try {
//       const tx = await contract.unstake(amount);
//       await tx.wait();
//       alert("Tokens unstaked successfully!");
//       await updateStakedAmount();
//       await updatePendingReward();
//     } catch (err) {
//       console.error(err);
//       alert("Error during unstaking.");
//     }
//   };

//   const claimReward = async () => {
//     try {
//       const tx = await contract.claimReward();
//       await tx.wait();
//       alert("Reward claimed successfully!");
//       await updateStakedAmount();
//       await updatePendingReward();
//     } catch (err) {
//       console.error(err);
//       alert("Error during claim.");
//     }
//   };

//   const updateStakedAmount = async () => {
//     try {
//       const userAddress = await signer.getAddress();
//       const stakedAmount = await contract.getStakedAmount(userAddress);
//       const formattedStakedAmount = ethers.utils.formatUnits(stakedAmount, 18);
//       setStakedAmount(formattedStakedAmount);
//     } catch (err) {
//       console.error("Error fetching staked amount:", err);
//     }
//   };

//   const updatePendingReward = async () => {
//     try {
//       const userAddress = await signer.getAddress();
//       const pendingReward = await contract.getPendingReward(userAddress);
//       const formattedPendingReward = ethers.utils.formatUnits(pendingReward, 18);
//       setPendingReward(formattedPendingReward);
//     } catch (err) {
//       console.error("Error fetching pending reward:", err);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Staking Contract</h2>
//       <BuyButton id="connectWallet" className={styles.button} onClick={connectWallet}>Connect Wallet</BuyButton>
//       <input 
//         type="number" 
//         id="stakeAmount" 
//         className={styles.input} 
//         placeholder="Stake Amount" 
//         value={stakeAmount}
//         onChange={(e) => setStakeAmount(e.target.value)} // Обновление состояния
//       />
//       <div className={styles.but}>
//       <BuyButton id="stakeTokens" className={styles.button} onClick={stakeTokens}>Stake Tokens</BuyButton>
//       <BuyButton id="unstakeTokens" className={styles.button} onClick={unstakeTokens}>Unstake Tokens</BuyButton>
//       <BuyButton id="claimReward" className={styles.button} onClick={claimReward}>Claim Reward</BuyButton>
//       </div>
//       <div className={`${styles.message}`} id="statusMessage">{statusMessage}</div>
//       <div className={styles.status} id="stakedAmount">Staked: {stakedAmount}</div>
//       <div className={styles.status} id="pendingReward">Unclaimed: {pendingReward}</div>
//     </div>
//   );
// }

// export default Form;
