// Почему результат разный?
// важность: 5
// Почему результат второго alert'а такой странный?

// alert( 123456789 ^ 0 ); // 123456789
// alert( 12345678912345 ^ 0 ); // 1942903641


// Потому, что максимальная длинна числа в побитовых операциях 32 бита, а второе чило больше, при преобразовании отбрасываются лишние старшие цифры.
