export default function generateNameColor(/** @type {string} */ name, /** @type {number} */ s, /** @type {number} */ l) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    var h = hash % 360;
    return 'hsl('+h+','+s+'%,'+l+'%)';
}