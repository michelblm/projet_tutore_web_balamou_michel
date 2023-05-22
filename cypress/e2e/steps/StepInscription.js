import { faker } from "@faker-js/faker";
import PageInscription from "../pages/PageInscription"

const pageInscription = new PageInscription;

class StepInscription{

    CreatePart(data){
        pageInscription.clickRegister()
        pageInscription.setType(data.type)
        const prenom = faker.person.firstName()
        data.prenom = prenom
        pageInscription.setPrenom(prenom)
        const nom = faker.person.lastName()
        data.nom = nom
        pageInscription.setNom(nom)
        pageInscription.setDateNaissance(data.dateNaissance)
        pageInscription.setAdresse(data.adresse)
        pageInscription.setPays(data.pays)
        pageInscription.setVille(data.ville)
        pageInscription.setCodePostal(data.codePostal)
        pageInscription.setPassport(data.passport)
        pageInscription.setCIN(data.cin)
        const username = pageInscription.generateEmail(prenom, nom)
        data.username = username
        pageInscription.setEmail(username)
        pageInscription.setTel(data.tel)
        pageInscription.setPassword(data.password)
        pageInscription.setPasswordConfirm(data.confirmPassword)
        const nomconj = faker.person.lastName()
        data.nomConjoint = nomconj
        pageInscription.setNomConjoint(nomconj)
        const prenomconj = faker.person.lastName()
        data.prenomConjoint = prenomconj
        pageInscription.setPrenomConjoint(prenomconj)
        pageInscription.setDateNaissanceConjoint(data.dateNaissanceConjoint)
        pageInscription.validate()
        return data


    }

    CreatePro(data){
        pageInscription.clickRegister()
        pageInscription.setType(data.type)
        const prenom = faker.person.firstName()
        data.prenom = prenom
        pageInscription.setPrenom(prenom)
        const nom = faker.person.lastName()
        data.nom = nom
        pageInscription.setNom(nom)
        pageInscription.setDateNaissance(data.dateNaissance)
        pageInscription.setAdresse(data.adresse)
        pageInscription.setPays(data.pays)
        pageInscription.setVille(data.ville)
        pageInscription.setCodePostal(data.codePostal)
        pageInscription.setPassport(data.passport)
        pageInscription.setCIN(data.cin)
        const username = pageInscription.generateEmail(prenom, nom)
        data.username = username
        pageInscription.setEmail(username)
        pageInscription.setTel(data.tel)
        pageInscription.setPassword(data.password)
        pageInscription.setPasswordConfirm(data.confirmPassword)
        pageInscription.setRaisonSociale(data.raisonSociale)
        pageInscription.setSiret(data.siret)
        pageInscription.setNumberOfEmployees(data.nombreSalarie)
        pageInscription.validate()
        return data


    }

    CreatePartExistant(data){
        pageInscription.clickRegister()
        pageInscription.setType(data.type)
        pageInscription.setPrenom(data.prenom)
        pageInscription.setNom(data.nom)
        pageInscription.setDateNaissance(data.dateNaissance)
        pageInscription.setAdresse(data.adresse)
        pageInscription.setPays(data.pays)
        pageInscription.setVille(data.ville)
        pageInscription.setCodePostal(data.codePostal)
        pageInscription.setPassport(data.passport)
        pageInscription.setCIN(data.cin)
        pageInscription.setEmail(data.username)
        pageInscription.setTel(data.tel)
        pageInscription.setPassword(data.password)
        pageInscription.setPasswordConfirm(data.confirmPassword)
        pageInscription.setNomConjoint(data.nomConjoint)
        pageInscription.setPrenomConjoint(data.prenomConjoint)
        pageInscription.setDateNaissanceConjoint(data.dateNaissanceConjoint)
        pageInscription.validate()
        return data
}
}

export default StepInscription