# Configuration EmailJS pour EMSInova

## Étapes de configuration:

### 1. Créer un compte EmailJS

- Allez sur https://www.emailjs.com/
- Créez un compte gratuit (jusqu'à 200 emails/mois)

### 2. Créer un service Email

1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez "Gmail" (ou votre fournisseur d'email)
4. Connectez votre compte `emsinova.club@gmail.com`
5. Notez le **Service ID** (par exemple: `service_emsinova`)

### 3. Créer un template

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez le template comme suit:

**Template Name:** Contact Form EMSInova

**Subject:** {{subject}}

**Content:**

```
Nouveau message de contact EMSInova

De: {{from_name}}
Objet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact EMSInova.
```

4. Notez le **Template ID** (par exemple: `template_contact`)

### 4. Obtenir la clé publique

1. Allez dans "Account" -> "General"
2. Copiez votre **Public Key** (par exemple: `YOUR_PUBLIC_KEY`)

### 5. Mettre à jour le code

Dans le fichier `src/components/Contact.jsx`, remplacez:

- `service_emsinova` par votre Service ID
- `template_contact` par votre Template ID
- `YOUR_PUBLIC_KEY` par votre Public Key

## Variables du template EmailJS:

- `{{from_name}}` - Le surnom de l'utilisateur
- `{{subject}}` - L'objet du message
- `{{message}}` - Le message complet
- `{{to_email}}` - Email de destination (emsinova.club@gmail.com)
- `{{reply_to}}` - Email de réponse

## Test

Après configuration, testez le formulaire sur votre site pour vérifier que les emails arrivent bien à `emsinova.club@gmail.com`.

## Limites du plan gratuit:

- 200 emails par mois
- 2 templates
- Support par email

Pour plus d'emails, vous pouvez upgrader vers un plan payant.
