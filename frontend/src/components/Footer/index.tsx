const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/alissonphp"
            target="_blank"
            rel="noreferrer"
          >
            Alisson Gomes
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>RIFAapp</strong>
            <br />
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
