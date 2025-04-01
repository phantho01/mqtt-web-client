// script.js
// Thông tin MQTT Broker
const broker = 'wss://ea33a8f4b65145ebbd0e22ad806bbba2.s1.eu.hivemq.cloud:8884/mqtt'; // Thay đổi URL Broker nếu cần
const options = {
    username: 'phantho', // Thay đổi username
    password: 'A123@123a' // Thay đổi password
};
const topic = 'modbus/data'; // Thay đổi topic MQTT

// Kết nối đến MQTT Broker
const client = mqtt.connect(broker, options);

// Xử lý sự kiện kết nối thành công
client.on('connect', () => {
    console.log('Kết nối thành công!');
    client.subscribe(topic);
});

// Xử lý sự kiện nhận được tin nhắn
client.on('message', (topic, message) => {
    console.log('Dữ liệu nhận được:', message.toString());
    document.getElementById('mqtt-data').innerHTML = message.toString();
});

// Xử lý sự kiện lỗi
client.on('error', (error) => {
    console.error('Lỗi:', error);
});