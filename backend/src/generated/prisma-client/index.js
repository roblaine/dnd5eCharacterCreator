"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "StatList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Language",
    embedded: false
  },
  {
    name: "Feature",
    embedded: false
  },
  {
    name: "Folk",
    embedded: false
  },
  {
    name: "Stat",
    embedded: false
  },
  {
    name: "StatBlock",
    embedded: false
  },
  {
    name: "Skill",
    embedded: false
  },
  {
    name: "SkillBlock",
    embedded: false
  },
  {
    name: "SaveBlock",
    embedded: false
  },
  {
    name: "Die",
    embedded: false
  },
  {
    name: "TemplateClass",
    embedded: false
  },
  {
    name: "Class",
    embedded: false
  },
  {
    name: "Character",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
