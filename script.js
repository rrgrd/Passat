function showDetails(model) {
    const detailsText = document.getElementById('detailsText');
    
    if (model === 'B7') {
        detailsText.textContent = "Passat B5: Семейство моделей Passat пятого поколения (1997—1999 Typ 3B и 2000—2005 Typ 3BG) было показано публике в 1996 году. В отличие от предыдущих машин, выпускавшихся с 1988 года, платформа вновь унифицирована с однотипными Audi А4 и А6. Это позволило применить более мощные и современные силовые агрегаты Audi продольного расположения";
    } else if (model === 'B8') {
        detailsText.textContent = "Passat B5+: Все Volkswagen Passat B5, построенные после конца 2000 года, стали именоваться как модели B5.5 и получили незначительные изменения во внешнем виде и технике, включая новую форму переднего блока фар, новые бамперы, крылья, задние стоп-сигналы и хромированную отделку.";
    } else {
        detailsText.textContent = "Выберите модель, чтобы увидеть детали.";
    }
}