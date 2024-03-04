// Écouter les changements de valeur de LDR 1
database.ref("test/ldr").on("value", (snapshot) => {
    const ldr1Value = snapshot.val();
    document.getElementById("ldr1Value").textContent = ldr1Value;
});

// Écouter les changements de valeur de LDR 2
database.ref("test/ldr2").on("value", (snapshot) => {
    const ldr2Value = snapshot.val();
    document.getElementById("ldr2Value").textContent = ldr2Value;
});