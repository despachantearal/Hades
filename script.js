const facts = [
  "Hades is the Greek god of the Underworld.",
  "The Underworld is where souls reside after death.",
  "Cerberus guards the gates of Hades.",
  "The River Styx separates the living from the dead.",
  "Hades is often depicted with a helm of invisibility."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function summon() {
  alert("🔥 Flames rise from the Underworld!");
}
