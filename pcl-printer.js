(function f() {
    try {
        document.querySelector('select[name="SIZ"]').value = "A4"
        document.querySelector('select[name="DUP"]').value = "DP"
    } catch {
        setTimeout(f, 2000)
    }
})()
