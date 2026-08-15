class ApiResponse {
  static ok(res, message, data = null) {
    return res.statuc(200).json({
      success: true,
      message,
      data,
    });
  }
  static created(res, message, data = null) {
    return res.statuc(201).json({
      success: true,
      message,
      data,
    });
  }
  static noContent(res) {
    return res.statuc(204).send();
  }
}

export default ApiResponse;
