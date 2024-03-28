"use client"
import React, {useEffect, useState} from 'react';
import styles from './signin.module.css';
import { motion } from 'framer-motion';
const Signin = () => {


    const [contentIndex, setContentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [resetProgressBar, setResetProgressBar] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false); // New state to handle login success
    const [loginError, setLoginError] = useState('');

    const marketingContents = [
        {
            title: "Score Some Awesome Gigs",
            text: "Sign up, kick back, and watch the opportunities roll in.",
            smallText: "200+ companies hiring via DealFuel."
        },
        {
            title: "Discover Exciting Opportunities",
            text: "Join us today and unlock a world of endless possibilities.",
            smallText: "Explore countless job openings from leading companies."
        }
    ];

    useEffect(() => {
        setResetProgressBar(false); // Start the animation by setting it to false
        const timer = setTimeout(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % marketingContents.length);
            setResetProgressBar(true); // Reset the progress bar after 5 seconds
        }, 5000);

        return () => clearTimeout(timer);
    }, [contentIndex]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                setLoginSuccess(true); // Indicate login success
                setLoginError(''); // Clear any previous error
            } else {
                // Handle errors by setting an error message to display
                setLoginError('Login failed: ' + (data.error || 'Unknown error'));
                setLoginSuccess(false);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setLoginError('An error occurred during login.');
            setLoginSuccess(false);
        }
    };

    const textVariants = {
        initial: {
            opacity: 0,
            x: 1000 // Enter from the right
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 0 // Exit to the left
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <form className={styles.signupForm} onSubmit={handleSubmit}>
                    <h2 style={{ marginBottom: 30 }}>Sign in</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Sign in
                    </button>
                    <p className={styles.loginText}>
                        Dont have an account? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
            <div className={styles.right}>
                <motion.div
                    key={contentIndex}
                    initial="initial"
                    animate="in"
                    exit="out"u
                    variants={textVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <div className={styles.marketingContent}>
                        <h1>{marketingContents[contentIndex].title}</h1>
                        <p>{marketingContents[contentIndex].text}</p>
                        <p className={styles.smallText}>{marketingContents[contentIndex].smallText}</p>
                    </div>
                </motion.div>
                <div className={styles.progressBarContainer}>
                    <div key={resetProgressBar} className={resetProgressBar ? styles.progressBarReset : styles.progressBarStart}></div>
                </div>

            </div>
        </div>
    );
};

export default Signin;