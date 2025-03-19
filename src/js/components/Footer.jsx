import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};