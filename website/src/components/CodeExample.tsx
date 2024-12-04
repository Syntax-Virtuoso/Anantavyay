import React from 'react';

export function CodeExample() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
      <pre className="text-white whitespace-pre-wrap">
        <code>{`# Efficient Matrix Multiplication
def matrix_multiply(A: list[list[float]], B: list[list[float]]) -> list[list[float]]:
    n = len(A)
    m = len(B[0])
    p = len(B)
    
    # Initialize result matrix with zeros
    result = [[0.0] * m for _ in range(n)]
    
    # Perform matrix multiplication
    for i in range(n):
        for j in range(m):
            for k in range(p):
                result[i][j] += A[i][k] * B[k][j]
    
    return result

# Example usage
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
result = matrix_multiply(A, B)

# Print result
for row in result:
    print(row)  # [[19, 22], [43, 50]]`}</code>
      </pre>
    </div>
  );
}