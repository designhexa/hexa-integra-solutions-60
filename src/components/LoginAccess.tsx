
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Shield, Eye, EyeOff } from "lucide-react";

interface LoginAccessProps {
  onLoginSuccess: () => void;
}

const LoginAccess = ({ onLoginSuccess }: LoginAccessProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Password untuk akses proposal
  const PROPOSAL_PASSWORD = "samugara2025";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulasi delay untuk loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === PROPOSAL_PASSWORD) {
      onLoginSuccess();
    } else {
      setError("Password salah. Silakan coba lagi.");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl border-gray-200">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-hexa-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-hexa-red" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">
            Akses Proposal
          </CardTitle>
          <p className="text-gray-600 text-sm mt-2">
            Masukkan password untuk melihat proposal pengembangan aplikasi
          </p>
        </CardHeader>
        
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-hexa-red hover:bg-hexa-red/90 text-white"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Memverifikasi...
                </div>
              ) : (
                "Akses Proposal"
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Proposal ini khusus untuk PT Samugara Global Capital
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginAccess;
