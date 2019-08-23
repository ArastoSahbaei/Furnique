# modly

<h3> Webbshoppen skall till ett minimum bestå av följande komponenter: </h3>

Startsida (design finns) med möjlighet för kunden att logga
in/registrera sig. Även länkar till sidor om företaget (Om Modly),
support (Kundtjänst) skall finnas.

Designsida där kunden kan bygga sitt egna bord. Kunden skall kunna
spara sitt bord (helst även om ej inloggad) och skall kunna ladda in
sin design vid ett senare besök. Denna designsida skall vara snabb och
enkel för kunden att jobba med, vilket gör att den bör skrivas utan
för mycket kommunikation med backend (helst enbart i frontend om
möjligt). Det skall även finnas en knapp för att beställa aktuellt
bord. Vid beställning skall kunden länkas vidare till kassan med sitt
bord i kundkorgen och en specifikation för produktion av bordet skall
skapas, som kan skickas till möbeltillverkaren Modly samarbetar med.
Denna sida skall även fungera bra i mobilen.

Kassa där kunden kan fylla i sina adressuppgifter samt betala. Kassan
skall inkludera Klarna Checkout. Kunden behöver ej ha ett konto
registrerat hos Modly för att handla utan skall registreras vid sitt
första köp om hen ej har ett konto. Vid beställning och betalning
skall kundens beställning lagras i en databas över orders,
bekräftelse skall mailas till kunden och beställningen skall mailas
till Modlys ordermottagningsadress. Specifikationen för kundens bord
skall bifogas i mailet samt sparas i databasen.

En tack-för-din-beställning-sida som tackar användaren för köpet.

Alla sidor skall fungera bra i mobilen, men det är inte nödvändigt
att de är specialskrivna för detta ändamål.
En webbserver skall sättas upp för att serva alla sidor. Webbservern
skall kunna ta hand om minst 10 kunder på sajten samtidigt, men detta
bör inte vara några problem för en vanlig server. Servern skall
backupas varje natt till valfri cloud-plattform.
Bonuskrav:

Kunden skall kunna signa upp sig för Modlys epost-lista på
förstasidan. Kunden skall även signas upp vid ett köp om de klickat i
boxen “Jag vill ha information och erbjudanden från Modly” som
skall finnas på tacksidan.

Det skall finnas en sida för Kundtjänst där kunden kan nå adresser
för att ställa frågor

Det skall finnas en sida om Modly som presenterar företaget
Teknikkrav
