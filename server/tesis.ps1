$port= new-Object System.IO.Ports.SerialPort COM6,9600
$port.Open()
$count=0
do {
        $line = $port.ReadLine()
        Write-Host $line # Do stuff here
        $count++
        if($count -ge 100)
        {
            Write-Host "finish"
            $port.Close()
            break
        }
    }
    while ($port.IsOpen)
    