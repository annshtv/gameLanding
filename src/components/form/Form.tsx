// import { ethers } from 'ethers';
// import { formatUnits, parseUnits } from 'ethers/lib/utils';
// import { useEffect, useState } from 'react';
import BuyButton from '../UI/BuyButton';
import styles from './Form.module.css';

function Form() {
// 	const [provider, setProvider] = useState(null);
// 	const [signer, setSigner] = useState(null);
// 	const [contract, setContract] = useState(null);
// 	const [stakingToken, setStakingToken] = useState(null);
// 	const [stakedAmount, setStakedAmount] = useState('0');
// 	const [pendingReward, setPendingReward] = useState('0');
// 	const [statusMessage, setStatusMessage] = useState(
// 		'Please connect your wallet to interact.'
// 	);
// 	const [stakeAmount, setStakeAmount] = useState('');
// 	const [tokenBalance, setTokenBalance] = useState('0');

// 	let stakingTokenAddress = "0xCBDc94B77e5A39850E7BA7E21712072fb1cb54aB";
//   let stakingContractAddress = "0x9458F085CFAcd94422fa2CDfF69b2d9C2de5f34A";
// 	const stakingContractABI = [
// 		{
// 			inputs: [
// 				{
// 					internalType: 'contract IERC20',
// 					name: '_stakingToken',
// 					type: 'address',
// 				},
// 				{ internalType: 'uint256', name: '_rewardRate', type: 'uint256' },
// 			],
// 			stateMutability: 'nonpayable',
// 			type: 'constructor',
// 		},
// 		{
// 			anonymous: false,
// 			inputs: [
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'previousOwner',
// 					type: 'address',
// 				},
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'newOwner',
// 					type: 'address',
// 				},
// 			],
// 			name: 'OwnershipTransferred',
// 			type: 'event',
// 		},
// 		{
// 			anonymous: false,
// 			inputs: [
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'user',
// 					type: 'address',
// 				},
// 				{
// 					indexed: false,
// 					internalType: 'uint256',
// 					name: 'reward',
// 					type: 'uint256',
// 				},
// 			],
// 			name: 'RewardPaid',
// 			type: 'event',
// 		},
// 		{
// 			anonymous: false,
// 			inputs: [
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'user',
// 					type: 'address',
// 				},
// 				{
// 					indexed: false,
// 					internalType: 'uint256',
// 					name: 'amount',
// 					type: 'uint256',
// 				},
// 			],
// 			name: 'Staked',
// 			type: 'event',
// 		},
// 		{
// 			anonymous: false,
// 			inputs: [
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'user',
// 					type: 'address',
// 				},
// 				{
// 					indexed: false,
// 					internalType: 'uint256',
// 					name: 'amount',
// 					type: 'uint256',
// 				},
// 			],
// 			name: 'Unstaked',
// 			type: 'event',
// 		},
// 		{
// 			inputs: [],
// 			name: 'claimReward',
// 			outputs: [],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
// 			name: 'getPendingReward',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
// 			name: 'getStakedAmount',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'owner',
// 			outputs: [{ internalType: 'address', name: '', type: 'address' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'renounceOwnership',
// 			outputs: [],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'rewardRate',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
// 			name: 'stake',
// 			outputs: [],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'address', name: '', type: 'address' }],
// 			name: 'stakes',
// 			outputs: [
// 				{ internalType: 'uint256', name: 'amount', type: 'uint256' },
// 				{ internalType: 'uint256', name: 'rewardDebt', type: 'uint256' },
// 				{ internalType: 'uint256', name: 'lastStakedTime', type: 'uint256' },
// 			],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'stakingToken',
// 			outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'totalStaked',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
// 			name: 'transferOwnership',
// 			outputs: [],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
// 			name: 'unstake',
// 			outputs: [],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 	];

// 	const tokenABI = [
// 		{
// 			inputs: [
// 				{ internalType: 'uint256', name: 'initialSupply', type: 'uint256' },
// 			],
// 			stateMutability: 'nonpayable',
// 			type: 'constructor',
// 		},
// 		{
// 			anonymous: false,
// 			inputs: [
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'owner',
// 					type: 'address',
// 				},
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'spender',
// 					type: 'address',
// 				},
// 				{
// 					indexed: false,
// 					internalType: 'uint256',
// 					name: 'value',
// 					type: 'uint256',
// 				},
// 			],
// 			name: 'Approval',
// 			type: 'event',
// 		},
// 		{
// 			anonymous: false,
// 			inputs: [
// 				{
// 					indexed: true,
// 					internalType: 'address',
// 					name: 'from',
// 					type: 'address',
// 				},
// 				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
// 				{
// 					indexed: false,
// 					internalType: 'uint256',
// 					name: 'value',
// 					type: 'uint256',
// 				},
// 			],
// 			name: 'Transfer',
// 			type: 'event',
// 		},
// 		{
// 			inputs: [
// 				{ internalType: 'address', name: '', type: 'address' },
// 				{ internalType: 'address', name: '', type: 'address' },
// 			],
// 			name: 'allowance',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [
// 				{ internalType: 'address', name: 'spender', type: 'address' },
// 				{ internalType: 'uint256', name: 'value', type: 'uint256' },
// 			],
// 			name: 'approve',
// 			outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [{ internalType: 'address', name: '', type: 'address' }],
// 			name: 'balanceOf',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'decimals',
// 			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'name',
// 			outputs: [{ internalType: 'string', name: '', type: 'string' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'symbol',
// 			outputs: [{ internalType: 'string', name: '', type: 'string' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [],
// 			name: 'totalSupply',
// 			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 			stateMutability: 'view',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [
// 				{ internalType: 'address', name: 'to', type: 'address' },
// 				{ internalType: 'uint256', name: 'value', type: 'uint256' },
// 			],
// 			name: 'transfer',
// 			outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 		{
// 			inputs: [
// 				{ internalType: 'address', name: 'from', type: 'address' },
// 				{ internalType: 'address', name: 'to', type: 'address' },
// 				{ internalType: 'uint256', name: 'value', type: 'uint256' },
// 			],
// 			name: 'transferFrom',
// 			outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
// 			stateMutability: 'nonpayable',
// 			type: 'function',
// 		},
// 	];

// 	// Add this function to help verify the token contract interface
// 	const verifyTokenContract = async tokenAddress => {
// 		try {
// 			// First check if any code exists at the address
// 			const code = await provider.getCode(tokenAddress);
// 			if (code === '0x') {
// 				return { success: false, message: 'No contract found at this address' };
// 			}

// 			// Try initializing with a minimal ERC20 interface to test basic functionality
// 			const minimalERC20ABI = [
// 				// Function to get token name
// 				'function name() view returns (string)',
// 				// Function to get token symbol
// 				'function symbol() view returns (string)',
// 				// Function to get token decimals
// 				'function decimals() view returns (uint8)',
// 				// Function to get token balance
// 				'function balanceOf(address) view returns (uint256)',
// 			];

// 			const testContract = new ethers.Contract(
// 				tokenAddress,
// 				minimalERC20ABI,
// 				provider
// 			);

// 			// Try all basic functions and collect results
// 			const results = {};

// 			try {
// 				results.name = await testContract.name();
// 			} catch (e) {
// 				results.nameError = e.message;
// 			}

// 			try {
// 				results.symbol = await testContract.symbol();
// 			} catch (e) {
// 				results.symbolError = e.message;
// 			}

// 			try {
// 				results.decimals = await testContract.decimals();
// 			} catch (e) {
// 				results.decimalsError = e.message;
// 			}

// 			// Check if it seems to be an ERC20 token
// 			const isERC20 = results.name || results.symbol || results.decimals;

// 			if (isERC20) {
// 				return {
// 					success: true,
// 					message: `Verified token: ${results.name || 'Unknown'} (${
// 						results.symbol || '??'
// 					})`,
// 					details: results,
// 				};
// 			} else {
// 				return {
// 					success: false,
// 					message: 'Contract found but does not appear to be an ERC20 token',
// 					details: results,
// 				};
// 			}
// 		} catch (error) {
// 			return {
// 				success: false,
// 				message: `Verification error: ${error.message}`,
// 			};
// 		}
// 	};

// 	verifyTokenContract();

// 	useEffect(() => {
// 		if (window.ethereum) {
// 			setStatusMessage('MetaMask available. Click "Connect Wallet".');

// 			// Handle account changes
// 			window.ethereum.on('accountsChanged', () => {
// 				// Reload the page when accounts change
// 				window.location.reload();
// 			});

// 			// Handle chain/network changes
// 			window.ethereum.on('chainChanged', () => {
// 				// Reload the page when network changes
// 				window.location.reload();
// 			});

// 			// Try to connect automatically if previously connected
// 			checkIfWalletIsConnected();
// 		} else {
// 			setStatusMessage('Please install MetaMask!');
// 		}

// 		// Cleanup event listeners on component unmount
// 		return () => {
// 			if (window.ethereum) {
// 				window.ethereum.removeAllListeners('accountsChanged');
// 				window.ethereum.removeAllListeners('chainChanged');
// 			}
// 		};
// 	}, []);

// 	// Check if wallet is already connected
// 	const checkIfWalletIsConnected = async () => {
// 		try {
// 			const accounts = await window.ethereum.request({
// 				method: 'eth_accounts', // This gets currently connected accounts
// 			});

// 			if (accounts.length > 0) {
// 				// User is already connected
// 				connectWallet();
// 			}
// 		} catch (error) {
// 			console.error('Failed to check if wallet is connected:', error);
// 		}
// 	};

// 	const connectWallet = async () => {
// 		try {
// 			if (!window.ethereum) {
// 				setStatusMessage('Please install MetaMask!');
// 				return;
// 			}

// 			setStatusMessage('Connecting to MetaMask...');

// 			const accounts = await window.ethereum.request({
// 				method: 'eth_requestAccounts',
// 			});

// 			if (accounts.length === 0) {
// 				setStatusMessage(
// 					'No accounts found. Please unlock MetaMask and try again.'
// 				);
// 				return;
// 			}

// 			const provider = new ethers.providers.Web3Provider(window.ethereum);
// 			const network = await provider.getNetwork();
// 			console.log('Connected to network:', network.name);

// 			// Make sure user is on the correct network (Mainnet in this case)
// 			if (network.name !== 'homestead') {
// 				setStatusMessage(
// 					`Please switch to Ethereum Mainnet. Current network: ${network.name}`
// 				);
// 				return;
// 			}

// 			const signer = provider.getSigner();
// 			const signerAddress = await signer.getAddress();

// 			// Improve contract initialization with error handling
// 			let stakingContract;
// 			let tokenContract;

// 			try {
// 				stakingContract = new ethers.Contract(
// 					stakingContractAddress,
// 					stakingContractABI,
// 					signer
// 				);

// 				tokenContract = new ethers.Contract(
// 					stakingTokenAddress,
// 					tokenABI,
// 					signer
// 				);

// 				// Test if contracts are initialized correctly with a simple view call
// 				await tokenContract.symbol();

// 				setContract(stakingContract);
// 				setStakingToken(tokenContract);
// 				setProvider(provider);
// 				setSigner(signer);

// 				setStatusMessage(
// 					`Wallet connected: ${signerAddress.substring(
// 						0,
// 						6
// 					)}...${signerAddress.substring(38)}`
// 				);

// 				// Now update user info with the verified contracts
// 				await updateUserInfo(signer, stakingContract, tokenContract);
// 			} catch (error) {
// 				console.error('Error initializing contracts:', error);
// 				setStatusMessage(
// 					'Error connecting to smart contracts. Please verify contract addresses.'
// 				);
// 				return;
// 			}
// 		} catch (error) {
// 			console.error('Error connecting wallet:', error);
// 			setStatusMessage(`Failed to connect wallet: ${error.message}`);
// 		}
// 	};

// 	const updateUserInfo = async (
// 		currentSigner,
// 		currentContract,
// 		currentToken
// 	) => {
// 		if (!currentSigner || !currentContract || !currentToken) return;

// 		try {
// 			const userAddress = await currentSigner.getAddress();

// 			// First check if contract exists on the blockchain
// 			try {
// 				const code = await provider.getCode(stakingContractAddress);
// 				if (code === '0x') {
// 					setStatusMessage('Staking contract not found at specified address');
// 					return;
// 				}
// 			} catch (err) {
// 				console.error('Error checking contract:', err);
// 				setStatusMessage('Error verifying contract existence');
// 				return;
// 			}

// 			// Get token balance first
// 			try {
// 				const balance = await currentToken.balanceOf(userAddress);
// 				const formattedBalance = formatUnits(balance, 18);
// 				setTokenBalance(formattedBalance);
// 				console.log('Token balance:', formattedBalance);
// 			} catch (err) {
// 				console.error('Error calling balanceOf:', err);
// 				setTokenBalance('0');
// 			}

// 			// Get staked amount with better error handling
// 			try {
// 				const stakedAmount = await currentContract.getStakedAmount(userAddress);
// 				const formattedStakedAmount = formatUnits(stakedAmount, 18);
// 				setStakedAmount(formattedStakedAmount);
// 				console.log('Staked Amount:', formattedStakedAmount);
// 			} catch (err) {
// 				console.error('Error calling getStakedAmount:', err);
// 				setStakedAmount('0');
// 				// Check if this is an ERC-20 related error
// 				if (
// 					err.message.includes('revert') ||
// 					err.message.includes('CALL_EXCEPTION')
// 				) {
// 					console.log('Contract method may not exist or user has no stake');
// 				}
// 			}

// 			// Get pending reward with better error handling
// 			try {
// 				const pendingReward = await currentContract.getPendingReward(
// 					userAddress
// 				);
// 				const formattedPendingReward = formatUnits(pendingReward, 18);
// 				setPendingReward(formattedPendingReward);
// 			} catch (err) {
// 				console.error('Error getting pending reward:', err);
// 				setPendingReward('0');
// 			}
// 		} catch (err) {
// 			console.error('Error updating user information:', err);
// 			setStatusMessage(`Error updating user info: ${err.message}`);
// 		}
// 	};

// 	const stakeTokens = async () => {
// 		if (!contract || !stakingToken || !signer) {
// 			setStatusMessage('Please connect your wallet first');
// 			return;
// 		}

// 		if (!stakeAmount || isNaN(stakeAmount) || parseFloat(stakeAmount) <= 0) {
// 			setStatusMessage('Please enter a valid token amount');
// 			return;
// 		}

// 		try {
// 			setStatusMessage('Processing transaction...');
// 			const amountInWei = parseUnits(stakeAmount, 18);

// 			const userAddress = await signer.getAddress();
// 			const balance = await stakingToken.balanceOf(userAddress);

// 			if (balance.lt(amountInWei)) {
// 				setStatusMessage('Insufficient token balance');
// 				return;
// 			}

// 			const allowance = await stakingToken.allowance(
// 				userAddress,
// 				stakingContractAddress
// 			);

// 			if (allowance.lt(amountInWei)) {
// 				setStatusMessage('Approving token allowance...');
// 				const approveTx = await stakingToken.approve(
// 					stakingContractAddress,
// 					amountInWei
// 				);
// 				setStatusMessage('Waiting for approval confirmation...');
// 				await approveTx.wait();
// 				setStatusMessage('Approval confirmed. Staking tokens...');
// 			}

// 			const stakeTx = await contract.stake(amountInWei);
// 			setStatusMessage('Waiting for staking confirmation...');
// 			await stakeTx.wait();

// 			setStatusMessage('Tokens successfully staked!');
// 			await updateUserInfo(signer, contract, stakingToken);
// 			setStakeAmount('');
// 		} catch (err) {
// 			console.error('Error staking tokens:', err);
// 			setStatusMessage(`Staking error: ${err.message}`);
// 		}
// 	};

// 	const unstakeTokens = async () => {
// 		if (!contract || !signer) {
// 			setStatusMessage('Please connect your wallet first');
// 			return;
// 		}

// 		try {
// 			setStatusMessage('Processing unstake transaction...');
// 			const userAddress = await signer.getAddress();

// 			let stakedAmountWei;
// 			try {
// 				stakedAmountWei = await contract.getStakedAmount(userAddress);
// 			} catch (err) {
// 				console.error('Error getting staked amount:', err);
// 				setStatusMessage('Could not retrieve staked amount');
// 				return;
// 			}

// 			if (stakedAmountWei.isZero()) {
// 				setStatusMessage('You have no staked tokens');
// 				return;
// 			}

// 			const tx = await contract.unstake(stakedAmountWei);
// 			setStatusMessage('Waiting for unstake confirmation...');
// 			await tx.wait();

// 			setStatusMessage('Tokens successfully unstaked!');
// 			await updateUserInfo(signer, contract, stakingToken);
// 		} catch (err) {
// 			console.error('Error unstaking tokens:', err);
// 			setStatusMessage(`Unstaking error: ${err.message}`);
// 		}
// 	};

// 	const claimReward = async () => {
// 		if (!contract || !signer) {
// 			setStatusMessage('Please connect your wallet first');
// 			return;
// 		}

// 		try {
// 			setStatusMessage('Claiming reward...');
// 			const userAddress = await signer.getAddress();

// 			let pendingRewardWei;
// 			try {
// 				pendingRewardWei = await contract.getPendingReward(userAddress);
// 			} catch (err) {
// 				console.error('Error getting pending reward:', err);
// 				setStatusMessage('Could not retrieve pending reward');
// 				return;
// 			}

// 			if (pendingRewardWei.isZero()) {
// 				setStatusMessage('You have no available rewards');
// 				return;
// 			}

// 			const tx = await contract.claimReward();
// 			setStatusMessage('Waiting for claim confirmation...');
// 			await tx.wait();

// 			setStatusMessage('Reward successfully claimed!');
// 			await updateUserInfo(signer, contract, stakingToken);
// 		} catch (err) {
// 			console.error('Error claiming reward:', err);
// 			setStatusMessage(`Claim error: ${err.message}`);
// 		}
// 	};

	// return (
	// 	<div className={styles.container}>
	// 		<h2 className={styles.title}>Staking Contract</h2>
	// 		<button onClick={connectWallet} className={styles.button}>
	// 			{signer ? 'Wallet Connected' : 'Connect Wallet'}
	// 		</button>
	// 		<input
	// 			type='number'
	// 			id='stakeAmount'
	// 			className={styles.input}
	// 			placeholder='Stake Amount'
	// 			value={stakeAmount}
	// 			onChange={e => setStakeAmount(e.target.value)}
	// 		/>
	// 		<div className={styles.but}>
	// 			<BuyButton
	// 				id='stakeTokens'
	// 				className={styles.button}
	// 				onClick={stakeTokens}
	// 			>
	// 				Stake Tokens
	// 			</BuyButton>
	// 			<BuyButton
	// 				id='unstakeTokens'
	// 				className={styles.button}
	// 				onClick={unstakeTokens}
	// 			>
	// 				Unstake Tokens
	// 			</BuyButton>
	// 			<BuyButton
	// 				id='claimReward'
	// 				className={styles.button}
	// 				onClick={claimReward}
	// 			>
	// 				Claim Reward
	// 			</BuyButton>
	// 		</div>
	// 		<div className={`${styles.message}`} id='statusMessage'>
	// 			{statusMessage}
	// 		</div>
	// 		<div className={styles.status} id='tokenBalance'>
	// 			Token Balance: {tokenBalance}
	// 		</div>
	// 		<div className={styles.status} id='stakedAmount'>
	// 			Staked: {stakedAmount}
	// 		</div>
	// 		<div className={styles.status} id='pendingReward'>
	// 			Unclaimed: {pendingReward}
	// 		</div>
	// 	</div>
	// );
}

export default Form;
