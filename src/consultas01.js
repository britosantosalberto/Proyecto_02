db.futbolistas.find() /* Muestra todos los futbolistas de la colección */
db.futbolistas.find({"futbolista":"cristano"}) /* muestra un futbolista en concreto */
db.futbolistas.find({"posición":"MC"}) /* muestra todos los futbolistas con esa posición */
db.futbolistas.find({"edad":"36"}) /* muestra todos los futbolistas con esa edad */
db.futbolistas.find({"edad": {$gte:29}}) /* muestra los futbolistas cuya edad es mayor 29 */
db.futbolistas.find({"edad": {$lt: 29}}) /* muestra los futbolistas cuya edad es menor de 29 */
db.futbolistas.find({"posición": {$ne:"DC"}}) /* muestra todos los jugadores salvo los de la posición DC */
db.futbolistas.find({"posición": {$ne:"DC"},"puntuación":{$gte:29}}) /* muestra todos los jugadores "DC" y cuya edad sea superior a 29 */
db.futbolistas.find({$or:[{"posición":"MC"},{"edad":{$lt:29}}]}) /* muestra todos los futbolistas "MC" cuya edad sea menor de 29 */