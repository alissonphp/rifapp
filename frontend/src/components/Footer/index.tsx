const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">
                    App desenvolvido por{" "}
                    <a
                        href="https://api.whatsapp.com/send?phone=5598982038880"
                        target="_blank"
                        rel="noreferrer"
                    >
                        A∴ R∴ L∴ S∴ Lauro Sodré N 03
                    </a>
                </p>
                <p className="text-light">
                    <small>
                        <strong>RIFAapp</strong>
                        <br/>
                        Para mais informações ou dúvidas, entre em contato conosco:
                    </small>
                </p>
                <p className="text-light">
                    <small>
                        © Copyright 2021 RIFAapp. All Rights Reserved
                    </small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
