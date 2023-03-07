const Alerta = ({ alerta }) => {
  return (
    <div className={`${alerta.error ? "texterror" : "textcorrect"}`}>
      {alerta.msg}
    </div>
  );
};

export default Alerta;
