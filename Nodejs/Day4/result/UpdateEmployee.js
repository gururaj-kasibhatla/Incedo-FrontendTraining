<html>
    <head>
        <title>
            New employee Details
        </title>
    </head>
    <body>
        <form action="/employee/insertEmployee" method="post">
            <table>
                <tr>
                    <td>Employee Code </td>
                    <td><input type="text" name="ecode" value="<%=updateEmployee.id%>"/></td>
                </tr>
                <tr>
                    <td>Employee Name</td>
                    <td><input type="text" name="ename" value="<%=updateEmployee.name%>"/></td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td><input type="text" name="salary" value="<%=updateEmployee.salary%>"/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="click here"/></td>
                </tr>


            </table>
        </form>
    </body>
</html>