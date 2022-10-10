import React, { useState } from "react";
import Modal from "react-modal";
import "./Card.css";

Modal.setAppElement("#root");

function Card({ suit }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function getMovimentacoes(suit) {
    const movimentacoes = suit.movimentacoes;

    return (
      <ul className="list">
        {movimentacoes.map((movimentacao) => (
          <li>
            <p className="black-70">{movimentacao.data}</p>
            <p>{movimentacao.descricao}</p>
          </li>
        ))}
      </ul>
    );
  }

  function getDetalhes(suit) {
    const detalhes = suit.detalhes_processo;

    return (
      <ul className="list">
        {detalhes.map((detalhe) => (
          <li>
            <p>{detalhe.descricao}</p>
          </li>
        ))}
      </ul>
    );
  }

  function getPartesEnvolvidas(suit) {
    const partes = suit.partes_envolvidas;

    return (
      <ul className="list">
        {partes.map((parte) => (
          <li>
            <p>{parte.nome}</p>
            <p className="i black-70">{parte.parte_envolvida}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="fl w-30 flex flex-column items-center tc bg-light-gray br3 pa3 ma3 grow bw2 shadow-5 helvetica">
        <div>
          <h2>{suit.cnj}</h2>
        </div>
        <div>
          <p>{suit.tribunal_origem}</p>
        </div>
        <div>
          <button
            className="bg-lightest-blue f6 link dim ba ph3 pv2 mb2 dib dark-gray br3"
            onClick={openModal}
          >
            Abrir Processo
          </button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="suit-detais"
          overlayClassName="modal-overlay"
        >
          <h2>
            Processo n. {suit.cnj} do tribunal {suit.tribunal_origem}
          </h2>
          <p>Distribuído em {suit.data_inicio}</p>
          <hr />
          <div>
            <div className="list">
              <h3>Movimentações</h3>
            </div>
            <div>{getMovimentacoes(suit)}</div>
          </div>
          <div>
            <div>
              <h3>Detalhes do Processo</h3>
            </div>
            <div>{getDetalhes(suit)}</div>
          </div>
          <div>
            <div>
              <h3>Partes Envolvidas</h3>
            </div>
            <div>{getPartesEnvolvidas(suit)}</div>
          </div>
          <button
            className="bg-lightest-blue f6 link dim ba ph3 pv2 mb2 dib dark-gray br3 helvetica"
            onClick={closeModal}
          >
            Fechar
          </button>
        </Modal>
      </div>
    </>
  );
}

export default Card;
