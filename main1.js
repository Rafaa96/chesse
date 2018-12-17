document.write("<table>");
for(var counter=1;counter<=8;counter++){
    document.writeln("<tr>");
    if(counter%2==1){
    for(var count=1;count<=8;count++){
        if(count%2==0)
            document.writeln("<td ></td>")
            else
        document.write("<td class='color'></td>");
    }
    }
    else
    for(var count2=1;count2<=8;count2++){
        if(count2%2==1)
        document.writeln("<td ></td>")
        else
    document.write("<td class='color'></td>");
    }
    document.write("</tr>")
}
document.write("</table>");