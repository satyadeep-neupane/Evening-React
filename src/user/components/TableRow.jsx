function TableRow({name, email, role, handler}) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td><button type="button" className="btn btn-danger" onClick={handler}>Delete</button></td>
        </tr>
    )
}

export default TableRow;