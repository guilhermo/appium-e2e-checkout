# 📱 Appium E2E Automation - Sauce Labs MyDemoApp

Projeto de automação de testes mobile *End-to-End* (E2E) desenvolvido para o aplicativo nativo **MyDemoAppRN**. O framework foi construído com foco em resiliência, componentização e **Type Safety**, simulando um ambiente real de testes contínuos para mobile.

---

## 🚀 Visão Geral
Este framework abstrai a complexidade da automação mobile utilizando o padrão **Page Object Model (POM)** aliado ao **Data-Driven Testing**. A arquitetura foi desenhada para separar a lógica de negócio (Specs) da lógica de interação (Page Objects) e da massa de dados (Data), garantindo alta manutenibilidade.

### 📊 Cobertura e Status dos Testes
A suíte E2E cobre os fluxos críticos da aplicação com **100% de sucesso**:
* **Login**: Validação de autenticação e acesso à listagem de produtos.
* **Checkout (Caminho Feliz)**: Fluxo completo (seleção de produto, carrinho, formulário de entrega e pagamento validado).
* **Checkout (Caminho de Exceção)**: Validação de estado e de alertas na tela de pagamento ao inserir dados inválidos de cartão de crédito.

---

## 🏗️ Arquitetura e Estrutura de Pastas
O projeto é estruturado para escalar, isolando configurações, ações e asserções.

```text
.
├── apps/
│   └── Android-MyDemoAppRN.1.3.0.build-244.apk # Artefato estático para Frictionless Review
├── test/
│   ├── data/                 # Massa de dados desacoplada
│   │   └── checkout.data.ts
│   ├── pageobjects/          # Encapsulamento de locators e ações (POM)
│   │   ├── checkout.page.ts
│   │   ├── login.page.ts
│   │   └── page.ts           # Base Page (Helpers e Custom Waits)
│   └── specs/                # Cenários de teste e asserções
│       └── checkout.e2e.ts
├── wdio.conf.ts              # Configuração global (Capabilities, Hooks, Allure)
└── package.json              # Scripts de execução e dependências

```

## 🛠️ Tecnologias e Padrões

* **Engine Mobile:** Appium (v2.x) + Driver UiAutomator2.

* **Framework E2E:** WebdriverIO (v9) + Mocha.

* **Linguagem:** TypeScript (Uso estrito de Interfaces para contratos de dados).

* **Relatórios:** Allure Report (com captura de evidências em hooks).

---

## 📦 Instalação e Configuração

**💡 Nota de Arquitetura (Frictionless Review):**

Embora o versionamento de binários seja evitado em repositórios corporativos, o arquivo .apk foi intencionalmente mantido na pasta /apps/. para que seja facilitado a execução do teste.

---
**1. Clonar o repositório:**
```sh
git clone git@github.com:guilhermo/appium-e2e-checkout.git
cd appium-e2e-checkout
```
**2. Instalar dependências:**
```sh
npm install
```
**3. Preparar o Ambiente (Emulador e Appium):**
* Inicie um Emulador Android (Recomendado: Android 16 / API 36 / Porta 5554).
* Em um terminal separado, inicie o servidor Appium localmente na porta padrão:
```sh
appium
```
---
## 🧪 Execução Dinâmica

O projeto possui scripts NPM customizados para gerenciar todo o ciclo de vida do teste, incluindo a limpeza de artefatos antigos. No terminal do projeto, execute:

---

**Para executar o fluxo completo (Limpeza ➔ Teste ➔ Geração de Relatório ➔ Abertura do Dashboard):**
```sh
npm run all-in-one
```

**Outros comandos disponíveis:**

* **npm run test:** Apenas executa a suíte de testes.

* **npm run clean:** Limpa os diretórios temporários do Allure.

---

## 📊 Relatórios e Evidências (Allure Report)
A integração com o Allure Report fornece métricas detalhadas de tempo de execução (Timeline) e passos de cada interação do WebDriver

O arquivo wdio.conf.ts possui um hook (afterTest) que captura screenshots automaticamente e os anexa ao relatório apenas em caso de falha.

<img width="1920" height="912" alt="image" src="https://github.com/user-attachments/assets/91051dd7-8918-42ba-b63b-56a26f3f0ac2" />

---

![appium_github_evidence](https://github.com/user-attachments/assets/acdfe2eb-074d-4f06-8e22-afc8fca3ee19)

