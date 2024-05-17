import React, { useEffect } from 'react'
import { BallTriangle, FidgetSpinner } from 'react-loader-spinner'
import { gsap,Circ } from "gsap";


function Loader() {
    useEffect(() => {
        var tl = gsap.timeline();
        tl.from("#p1", {
            x: 900,
            opacity:0
        })
        .from("#p2", {
            x: 500,
            opacity: 0
        })
        .from("#p3", {
            x: 500,
            opacity: 0
        });
        tl.to("#p1", { 
            x: 0,
            opacity: 100,
            duration: 1,
            delay:-0.5
        })
        .to("#p2", {
            x: 0,
            duration: 1,
            opacity: 100,
            delay: -0.5
        })
        .to("#p3", {
            x: 0,
            duration: 1,
            opacity: 100,
            delay: -0.5
        })
        .to("#loader", {
            height: 0,
            duration: 1,
        })
        .to("#p3,#p1,#p2,#logo,#slang,#loaderIcon", {
            y:-100,
            autoAlpha: 0,
            delay:-0.5
        })
        .to("#purple", {
            height: 0,
            duration: 1,
            delay:-0.4
        })
            
    }, []);
    

    
    return (
        <>
            <div id='loader' className=' w-full h-screen flex flex-col  justify-between items-center '>
                <div id='logo'>
                    <div className='pt-4   '>
                        <img className='w-24 h-12 hover:cursor-pointer' src="https://i.ibb.co/Ntn0dMj/logosvg1.png" alt="logo" />
                    </div>
                </div>
                <div id='slang' className=' flex flex-col lg:flex-row   justify-center items-center overflow-hidden'>
                    <p id='p1' className='  text-3xl  font-[AdventPro] font-semibold uppercase'>Where Creativity</p>
                    <img id='p2' className=' w-40 h-20 lg:w-40 ' src="data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e %3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='2100' height='2100' viewBox='0 0 2100 2100'%3e%3cpath fill-rule='nonzero' fill='rgb(168 85 247)' fill-opacity='1' d='M 884.195312 1528.425781 C 864.265625 1519.34375 849.105469 1505.316406 840.132812 1487.65625 L 832.230469 1472.109375 L 811.429688 1472.960938 C 775.734375 1474.417969 746.425781 1456.605469 730.308594 1423.667969 C 721.238281 1405.132812 721.125 1405.046875 705.378906 1404.972656 C 664.035156 1404.773438 625.691406 1369.246094 620.621094 1326.445312 C 618.808594 1311.152344 617.769531 1309.585938 608.003906 1307.480469 C 579.808594 1301.398438 553.492188 1278.339844 542.800781 1250.351562 C 534.160156 1227.722656 536.675781 1195.109375 548.433594 1177.34375 L 557.28125 1163.972656 L 532.621094 1133.410156 C 496.855469 1089.078125 499.605469 1090.039062 484.671875 1116.738281 C 474.152344 1135.550781 469.417969 1140.546875 456.828125 1146.117188 C 446.640625 1150.621094 438.296875 1152.089844 431.429688 1150.582031 C 420.472656 1148.175781 318.800781 1087.980469 306.636719 1076.699219 C 302.617188 1072.96875 297.472656 1063.289062 295.203125 1055.191406 C 291.597656 1042.320312 291.917969 1038.578125 297.726562 1025.558594 C 301.386719 1017.359375 353.324219 923.828125 413.152344 817.71875 C 472.980469 711.609375 527.066406 615.238281 533.347656 603.558594 C 539.628906 591.890625 548.691406 579.25 553.484375 575.480469 C 564.75 566.621094 582.5625 563.371094 595.386719 567.839844 C 612.398438 573.769531 708.179688 633.859375 716.632812 643.898438 C 729.472656 659.160156 730.613281 674.910156 720.472656 697.058594 C 715.679688 707.53125 711.753906 716.539062 711.753906 717.070312 C 711.753906 719.609375 766.109375 749.101562 776.632812 752.269531 C 783.207031 754.261719 805.433594 758.449219 826.027344 761.589844 L 863.472656 767.308594 L 868.617188 759.21875 C 893.746094 719.71875 950.058594 704.160156 1095.910156 696.429688 C 1149.371094 693.601562 1197.53125 698.769531 1272.890625 715.460938 C 1306.378906 722.871094 1341.109375 728.941406 1350.070312 728.941406 C 1363.398438 728.941406 1385.769531 724.128906 1390.679688 720.210938 C 1391.289062 719.71875 1387.828125 711.898438 1382.988281 702.820312 C 1371.851562 681.871094 1371.460938 662.269531 1381.890625 646.980469 C 1386.988281 639.488281 1408.480469 624.25 1445.910156 601.578125 C 1509.980469 562.769531 1521.820312 559.160156 1541.429688 572.488281 C 1554.621094 581.441406 1556.25 584.121094 1647.269531 746.011719 C 1681.589844 807.050781 1730.96875 894.691406 1757 940.769531 C 1783.039062 986.839844 1805.289062 1029.351562 1806.46875 1035.21875 C 1809.300781 1049.390625 1803.039062 1067.300781 1791.570312 1077.828125 C 1778.929688 1089.441406 1682 1147.574219 1670.988281 1150.144531 C 1651.351562 1154.730469 1628.898438 1141.589844 1616.449219 1118.210938 C 1603.660156 1094.191406 1605.601562 1094 1576.699219 1122.023438 C 1562.050781 1136.230469 1543.578125 1152.113281 1535.660156 1157.316406 C 1521.460938 1166.644531 1521.328125 1166.917969 1526.269531 1176.472656 C 1529.019531 1181.804688 1531.25 1195.078125 1531.210938 1205.96875 C 1531.03125 1251.597656 1499.589844 1286.71875 1454.769531 1291.34375 L 1437.179688 1293.160156 L 1431.199219 1313.4375 C 1423.300781 1340.25 1402.769531 1361.40625 1377.320312 1368.964844 C 1367.410156 1371.90625 1355.808594 1374.3125 1351.519531 1374.3125 C 1345.238281 1374.3125 1343 1377.113281 1339.910156 1388.824219 C 1334.191406 1410.519531 1320.75 1431.488281 1306.570312 1440.828125 C 1298.789062 1445.957031 1284.148438 1450.71875 1268.351562 1453.257812 C 1243.308594 1457.28125 1242.328125 1457.816406 1224.640625 1477.175781 C 1179.589844 1526.480469 1122.019531 1532.503906 1016.410156 1498.964844 L 990.238281 1490.65625 L 974.71875 1507.453125 C 966.179688 1516.6875 953.511719 1526.621094 946.5625 1529.523438 C 929.640625 1536.597656 901.007812 1536.09375 884.195312 1528.429688 Z M 941.636719 1472.484375 C 972.699219 1434.285156 991.757812 1404.148438 991.757812 1393.238281 C 991.757812 1377.007812 978.792969 1359.859375 962.125 1354.054688 C 949.601562 1349.6875 947.160156 1349.761719 939.609375 1354.707031 C 930.523438 1360.664062 884.996094 1419.714844 878.496094 1433.972656 C 868.765625 1455.335938 891.558594 1487 916.667969 1487 C 928.035156 1487 931.453125 1485.011719 941.636719 1472.484375 Z M 1153.339844 1469.679688 C 1160.519531 1467.6875 1172.621094 1460.429688 1180.230469 1453.554688 L 1194.070312 1441.050781 L 1118.660156 1404.558594 C 1052.058594 1372.328125 1042.980469 1366.96875 1040.890625 1358.625 C 1037.851562 1346.515625 1045.199219 1333.140625 1057.058594 1329.203125 C 1064.660156 1326.675781 1078.289062 1332.226562 1147.550781 1366.0625 C 1223.898438 1403.367188 1230.410156 1405.914062 1250.039062 1406.113281 C 1276.128906 1406.378906 1287.019531 1399.972656 1292.691406 1381.007812 C 1296.128906 1369.570312 1296 1366.414062 1291.980469 1362.6875 C 1289.320312 1360.207031 1248.710938 1336.226562 1201.761719 1309.394531 C 1154.808594 1282.5625 1113.710938 1258.296875 1110.421875 1255.46875 C 1100.988281 1247.355469 1102.679688 1229.363281 1113.691406 1220.707031 C 1119.230469 1216.347656 1125.75 1214.144531 1129.980469 1215.207031 C 1133.859375 1216.179688 1179.738281 1241.621094 1231.949219 1271.742188 C 1314.949219 1319.628906 1328.738281 1326.507812 1341.78125 1326.507812 C 1349.980469 1326.507812 1360.628906 1325.007812 1365.441406 1323.179688 C 1377.628906 1318.546875 1388.230469 1300.183594 1387.089844 1285.707031 C 1386.171875 1274.125 1384.46875 1272.921875 1283.378906 1212.289062 C 1226.851562 1178.390625 1178.058594 1148.542969 1174.960938 1145.964844 C 1166.289062 1138.75 1167.488281 1116.46875 1176.910156 1109.867188 C 1181.089844 1106.945312 1187.191406 1104.550781 1190.480469 1104.550781 C 1193.761719 1104.550781 1248.96875 1136.054688 1313.160156 1174.554688 C 1418.339844 1237.648438 1431.359375 1244.554688 1445.058594 1244.554688 C 1457.789062 1244.554688 1462.140625 1242.671875 1471.871094 1232.945312 C 1481.078125 1223.734375 1483.480469 1218.597656 1483.480469 1208.09375 C 1483.480469 1185.828125 1474.148438 1176.175781 1391.28125 1112.726562 C 1281.871094 1028.949219 1201.269531 976.460938 1088.308594 915.429688 L 1039.730469 889.179688 L 1015.75 896.460938 C 1002.558594 900.46875 991.757812 905.011719 991.757812 906.550781 C 991.757812 913.128906 938.050781 965.679688 917.070312 979.621094 C 885.964844 1000.308594 849.105469 1012.359375 816.953125 1012.359375 C 773.066406 1012.359375 754.074219 994.949219 754.90625 955.480469 C 755.472656 928.550781 763.738281 910.539062 801.242188 854.488281 L 830.328125 811.019531 L 817.992188 808.898438 C 757.785156 798.570312 746.722656 794.738281 707.433594 770.691406 C 696.605469 764.058594 687.148438 759.25 686.414062 760 C 683.277344 763.21875 523.945312 1047.160156 523.945312 1049.53125 C 523.945312 1050.96875 527.949219 1055.871094 532.839844 1060.421875 C 537.734375 1064.96875 551.828125 1081.390625 564.160156 1096.910156 L 586.582031 1125.128906 L 593.726562 1118.417969 C 614.023438 1099.351562 651.601562 1095.648438 680.199219 1109.902344 C 696.476562 1118.015625 715.175781 1135.128906 719.699219 1146.050781 C 721.1875 1149.644531 722.40625 1149.382812 725.285156 1144.855469 C 743.183594 1116.679688 763.765625 1104.550781 793.679688 1104.550781 C 818.75 1104.550781 832.753906 1109.984375 851.628906 1127.035156 C 869.136719 1142.855469 878.816406 1161.128906 881.445312 1183.324219 C 883.09375 1197.226562 884.632812 1200.164062 890.273438 1200.164062 C 902.464844 1200.164062 927.425781 1215.097656 940.988281 1230.507812 C 955.136719 1246.582031 964.441406 1271.371094 964.441406 1292.980469 C 964.441406 1302.445312 965.882812 1306.019531 969.699219 1306.019531 C 978.457031 1306.019531 1000.53125 1318.730469 1012.421875 1330.621094 C 1040.828125 1359.027344 1047.878906 1405.757812 1028.25 1435.433594 L 1018.910156 1449.542969 L 1026.679688 1452.480469 C 1035.269531 1455.734375 1087.609375 1468.761719 1101.03125 1470.992188 C 1117.941406 1473.800781 1140.550781 1473.230469 1153.339844 1469.679688 Z M 872.351562 1358.945312 C 915.089844 1300.507812 917.214844 1296.832031 915.535156 1284.296875 C 912.347656 1260.484375 885.699219 1241.542969 865.414062 1248.667969 C 857.128906 1251.582031 775.019531 1359.367188 768.703125 1375.625 C 762.160156 1392.46875 778.792969 1419.496094 799.238281 1425.230469 C 817.488281 1430.351562 825.335938 1423.238281 872.351562 1358.945312 Z M 722.488281 1352.972656 C 725.351562 1350.625 746.65625 1322.582031 769.828125 1290.652344 C 793 1258.726562 817.070312 1226.5625 823.320312 1219.183594 C 836.785156 1203.285156 838.210938 1187.898438 827.789062 1171.03125 C 818.472656 1155.957031 796.824219 1147.054688 784.277344 1153.140625 C 779.144531 1155.632812 752.324219 1188.714844 721.347656 1230.769531 C 663.398438 1309.441406 660.558594 1315.644531 672.90625 1336.542969 C 683.546875 1354.554688 709.898438 1363.289062 722.488281 1352.972656 Z M 640.746094 1257.359375 C 652.308594 1248.257812 684.4375 1198.902344 684.425781 1190.265625 C 684.410156 1179.085938 673.703125 1161.261719 662.664062 1154.027344 C 657.546875 1150.675781 649.085938 1148.921875 641.160156 1149.574219 C 629.207031 1150.558594 626.277344 1153.0625 606.753906 1178.976562 C 588.703125 1202.933594 585.410156 1209.449219 585.410156 1221.210938 C 585.410156 1232.808594 587.609375 1237.3125 598.667969 1248.371094 C 608.910156 1258.613281 614.585938 1261.628906 623.625 1261.628906 C 630.0625 1261.628906 637.765625 1259.707031 640.746094 1257.359375 Z M 1506.480469 1119.066406 C 1514.070312 1113.898438 1533.75 1096.859375 1550.230469 1081.191406 C 1580.171875 1052.738281 1580.191406 1052.710938 1574.871094 1043.628906 C 1571.941406 1038.640625 1535.398438 973.859375 1493.671875 899.671875 C 1451.941406 825.488281 1417.550781 764.488281 1417.25 764.128906 C 1416.949219 763.761719 1405.320312 766.449219 1391.410156 770.101562 C 1359.421875 778.5 1336.089844 778.390625 1297.378906 769.660156 C 1177.890625 742.710938 1155 740.25 1074.390625 745.710938 C 1009.230469 750.121094 949.621094 759.050781 930.007812 767.339844 C 920.027344 771.550781 909.210938 784.730469 871.492188 838.648438 C 814.496094 920.121094 805.167969 935.378906 802.050781 952.238281 L 799.589844 965.53125 L 823.996094 963.789062 C 867.1875 960.699219 910.875 932.238281 949.507812 882.039062 C 964.609375 862.410156 965.003906 862.171875 1003 850.058594 L 1041.269531 837.851562 L 1078.839844 856.71875 C 1196.441406 915.808594 1329.230469 1001.921875 1447.621094 1095.839844 C 1470.160156 1113.722656 1489.519531 1128.375 1490.640625 1128.402344 C 1491.769531 1128.429688 1498.898438 1124.230469 1506.480469 1119.066406 Z M 451.683594 1078.089844 C 459.054688 1065.410156 479.703125 1028.921875 497.5625 996.988281 C 515.421875 965.058594 563.238281 879.910156 603.820312 807.75 C 644.402344 735.601562 677.609375 675.648438 677.609375 674.53125 C 677.609375 673.410156 656.269531 659.25 630.191406 643.070312 L 582.777344 613.640625 L 499.761719 760.921875 C 372.234375 987.179688 342.964844 1039.71875 342.996094 1042.359375 C 343.019531 1044.789062 431.292969 1100.414062 435.867188 1100.886719 C 437.191406 1101.023438 444.308594 1090.769531 451.683594 1078.089844 Z M 1712.429688 1072.960938 C 1738.441406 1057.46875 1759.421875 1043.929688 1759.039062 1042.871094 C 1755.339844 1032.441406 1518.601562 616.25 1516.371094 616.25 C 1514.039062 616.25 1451.378906 653.769531 1425.960938 670.390625 C 1421.46875 673.328125 1431.558594 691.859375 1627.648438 1040.53125 C 1646.398438 1073.859375 1662.5 1101.136719 1663.441406 1101.136719 C 1664.378906 1101.136719 1686.429688 1088.460938 1712.429688 1072.960938 Z M 1712.429688 1072.960938 '/%3e%3c/svg%3e" alt="" />
                    <p id='p3' className=' text-3xl font-[AdventPro] font-semibold uppercase'> Strategy Collide</p>
                </div>
                <div id='loaderIcon' className='mb-28 lg:mb-4'>
                    <BallTriangle
                        height={40}
                        width={40}
                        radius={5}
                        color="#ffff"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
            <div id='purple' className='w-full h-screen bg-[#9147FF]'>

            </div>
        </>
    )
}

export default Loader