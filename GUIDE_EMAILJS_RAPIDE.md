# Guide Rapide - Configuration EmailJS (5 minutes)

## ⚠️ ERREUR COMMUNE: "insufficient authentication scopes"

Si vous voyez cette erreur, suivez la Solution de Reconnexion Gmail ci-dessous.

## Solution: Reconnecter Gmail avec les bonnes permissions

### Étape 1: Retirer la connexion actuelle

1. Allez sur https://dashboard.emailjs.com/admin
2. Cliquez sur "Email Services" (menu gauche)
3. Trouvez votre service Gmail
4. Cliquez sur l'icône **"Poubelle"** (🗑️) pour le supprimer
5. Confirmez la suppression

### Étape 2: Reconnecter Gmail CORRECTEMENT

1. Cliquez sur "Add New Service"
2. Sélectionnez **"Gmail"**
3. Cliquez sur "Connect Account"
4. **IMPORTANT:** Connectez-vous avec `emsinova.club@gmail.com`
5. **CRUCIAL:** Quand Google demande les permissions:
   - ✅ Cochez "Voir, modifier, créer et supprimer vos e-mails"
   - ✅ Cochez "Envoyer des e-mails en votre nom"
   - ✅ Autorisez TOUTES les permissions demandées
6. Une fois connecté, **COPIEZ le nouveau Service ID**

### Étape 3: Mettre à jour le code

Remplacez le `YOUR_SERVICE_ID` dans Contact.jsx avec le **nouveau** Service ID.

---

## Configuration Complète EmailJS

## Étape 1: Créer un compte EmailJS (GRATUIT)

1. Allez sur: https://www.emailjs.com/
2. Cliquez sur "Sign Up" (Inscription)
3. Inscrivez-vous avec votre email

## Étape 2: Connecter votre email Gmail

1. Dans le dashboard, cliquez sur "Email Services" (à gauche)
2. Cliquez sur "Add New Service"
3. Sélectionnez "Gmail"
4. Cliquez sur "Connect Account"
5. Connectez-vous avec `emsinova.club@gmail.com`
6. **IMPORTANT**: Copiez le **Service ID** (exemple: service_abc123)

## Étape 3: Créer un template d'email

1. Cliquez sur "Email Templates" (à gauche)
2. Cliquez sur "Create New Template"
3. Configurez comme suit:

**Dans "To Email":** emsinova.club@gmail.com

**Dans "Subject":** Nouveau message: {{subject}}

**Dans "Content":**

```
Bonjour,

Vous avez reçu un nouveau message de contact depuis le site EMSInova.

De: {{from_name}}
Objet: {{subject}}

Message:
{{message}}

---
Message envoyé depuis le formulaire de contact EMSInova
```

4. Cliquez sur "Save"
5. **IMPORTANT**: Copiez le **Template ID** (exemple: template_xyz789)

## Étape 4: Obtenir votre clé publique

1. Cliquez sur "Account" (en haut à droite)
2. Allez dans "General"
3. Copiez votre **Public Key** (exemple: 7iq-3v_WR0xQc3bHo)

## Étape 5: Mettre à jour le code

Ouvrez le fichier `src/components/Contact.jsx` et remplacez les 3 valeurs à la ligne 38-40:

```javascript
emailjs.init("VOTRE_PUBLIC_KEY"); // Remplacez par votre Public Key

const response = await emailjs.send(
  "VOTRE_SERVICE_ID", // Remplacez par votre Service ID
  "VOTRE_TEMPLATE_ID", // Remplacez par votre Template ID
  templateParams
);
```

## C'est tout! 🎉

Maintenant le formulaire enverra automatiquement les emails à `emsinova.club@gmail.com`

## Test

1. Cliquez sur l'image de contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez votre boîte email `emsinova.club@gmail.com`

## Plan gratuit EmailJS:

✅ 200 emails/mois
✅ Illimité de templates
✅ Support technique
✅ Dashboard de suivi

**Besoin d'aide?** La documentation complète: https://www.emailjs.com/docs/
