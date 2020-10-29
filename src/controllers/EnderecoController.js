const execSqlQuery = require("../utils/execSqlQuery")
const Endereco = require("../models/Endereco")

module.exports = {
    create: async (req, res) => {
        const {cidade, estado, rua, quadra, lote, numero, idFornecedor, idCliente, idEmpresa} = Endereco(req)

        await execSqlQuery(`INSERT INTO ENDERECO(CIDADE, ESTADO, RUA, QUADRA, LOTE, NUMERO, ID_END_FORNECEDOR,
                            ID_END_CLIENTE, ID_END_EMPRESA) VALUES('${cidade}', '${estado}', '${rua}', ${quadra},
                            ${lote}, ${numero}, ${idFornecedor}, ${idCliente}, ${idEmpresa})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM ENDERECO WHERE ID_ENDERECO=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const {cidade, estado, rua, quadra, lote, numero, idFornecedor, idCliente, idEmpresa} = Endereco(req)

        await execSqlQuery(`UPDATE ENDERECO SET CIDADE='${cidade}', ESTADO='${estado}', RUA='${rua}',
                            QUADRA=${quadra}, LOTE=${lote}, NUMERO=${numero}, ID_END_FORNECEDOR=${idFornecedor},
                            ID_END_CLIENTE=${idCliente}, ID_END_EMPRESA=${idEmpresa} WHERE ID_ENDERECO=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE ENDERECO WHERE ID_ENDERECO=${id}`, res)
    }
}