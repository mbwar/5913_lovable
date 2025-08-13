import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Shield, Calculator, BookOpen, FileText, CheckCircle2, AlertTriangle, Scale } from "lucide-react";
import LawAssistant from "@/components/LawAssistant";
import ConstructionInsurance from "@/components/ConstructionInsurance";
import CivilLiability from "@/components/CivilLiability";
import LawReference from "@/components/LawReference";
import ImplementationDecree from "@/components/ImplementationDecree";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-primary to-primary-light rounded-lg">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Assistant Loi 59-13</h1>
                <p className="text-sm text-muted-foreground">Assurances Construction - Maroc</p>
              </div>
            </div>
            <Badge variant="outline" className="border-primary text-primary">
              Version 1.0
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-card shadow-sm">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Vue d'ensemble</span>
            </TabsTrigger>
            <TabsTrigger value="assistant" className="flex items-center space-x-2">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Assistant</span>
            </TabsTrigger>
            <TabsTrigger value="trc" className="flex items-center space-x-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">TRC</span>
            </TabsTrigger>
            <TabsTrigger value="rcd" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">RC Décennale</span>
            </TabsTrigger>
            <TabsTrigger value="decree" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Arrêté</span>
            </TabsTrigger>
            <TabsTrigger value="reference" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Références</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Hero Section */}
            <Card className="border-0 bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-bold text-center">
                  Loi 59-13 : Assurances Construction
                </CardTitle>
                <CardDescription className="text-center text-primary-foreground/90 text-lg">
                  Outil pédagogique pour l'application des obligations d'assurance Tous Risques Chantier et Responsabilité Civile Décennale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Building2 className="h-8 w-8" />
                      <h3 className="font-semibold text-lg">Assurance TRC</h3>
                    </div>
                    <p className="text-sm opacity-90">
                      Tous Risques Chantier - Protection des ouvrages pendant la construction
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="h-8 w-8" />
                      <h3 className="font-semibold text-lg">RC Décennale</h3>
                    </div>
                    <p className="text-sm opacity-90">
                      Responsabilité Civile Décennale - Garantie sur 10 ans après réception
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    </div>
                    <CardTitle className="text-lg">Champs d'application</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Habitations {"> 3"} étages ou {"> 800"}m²</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Bâtiments commerciaux {"> 400"}m²</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Établissements publics spécifiques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-warning/10 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-warning" />
                    </div>
                    <CardTitle className="text-lg">Exclusions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                      <span>Ouvrages de l'État</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                      <span>Infrastructures routières</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                      <span>Modifications d'ouvrages existants</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Calculator className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Montants & Sanctions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>RC Chantier : 4M à 40M DH</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>Amende TRC : 6 DH/m²</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>Amende RC : 10K à 100K DH</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
                <CardDescription>
                  Accédez rapidement aux outils les plus utilisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2"
                    onClick={() => setActiveTab("assistant")}
                  >
                    <Calculator className="h-6 w-6" />
                    <span>Évaluer un chantier</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2"
                    onClick={() => setActiveTab("trc")}
                  >
                    <Building2 className="h-6 w-6" />
                    <span>Guide TRC</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2"
                    onClick={() => setActiveTab("rcd")}
                  >
                    <Shield className="h-6 w-6" />
                    <span>Guide RC Décennale</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2"
                    onClick={() => setActiveTab("decree")}
                  >
                    <FileText className="h-6 w-6" />
                    <span>Arrêté application</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col space-y-2"
                    onClick={() => setActiveTab("reference")}
                  >
                    <FileText className="h-6 w-6" />
                    <span>Textes de loi</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistant">
            <LawAssistant />
          </TabsContent>

          <TabsContent value="trc">
            <ConstructionInsurance />
          </TabsContent>

          <TabsContent value="rcd">
            <CivilLiability />
          </TabsContent>

          <TabsContent value="decree">
            <ImplementationDecree />
          </TabsContent>

          <TabsContent value="reference">
            <LawReference />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-card/95 backdrop-blur-sm border-t mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>Assistant Loi 59-13 - Outil pédagogique pour les assurances construction au Maroc</p>
            <p className="mt-1">Développé pour faciliter l'application quotidienne de la réglementation</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;