"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = require("../../datas/dbConfig");
const dbConnectMgr_1 = require("../../datas/dbConnectMgr");
function proofColumns(sql) {
    if (!sql)
        throw new Error("Can't create a TableMapping instance, sql: " + sql);
    sql = sql.replace(/\n/g, "")
        .replace(/\r/g, "")
        .substring(sql.indexOf("(") + 1, sql.indexOf(")"));
    let fields = new Array();
    for (let col of sql.split(",")) {
        col = col.trim();
        if (col.startsWith("\"")) {
            let index = col.indexOf("\" ");
            col = col.substring(1, index) + col.substring(index + 1);
        }
        fields.push({
            name: col.substring(0, col.indexOf(" ")),
            content: col
        });
    }
    return fields;
}
let db = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(dbConfig_1.DBConfig.dataPath);
let result = db
    .createCommand(`SELECT * FROM sqlite_master WHERE type = "table";`)
    .executeQueryFileds("sql", "name");
for (let r of result) {
    if (!r.sql)
        continue;
    let columns = new Array();
    proofColumns(r.sql).forEach(({ name, content }) => {
        if (content.indexOf("VARCHAR") > 0)
            columns.push(`${name} = REPLACE(${name}, "#", "|")`);
    });
    if (columns.length == 0)
        continue;
    db.createCommand(`update "${r.name}" set ${columns.join(", ")} ;`).executeUpdate();
}
//# sourceMappingURL=main.js.map